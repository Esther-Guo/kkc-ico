"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Countdown } from "@/components/ui/countdown"
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers5/react"
import { Signer, ethers } from "ethers"
import { useState, useEffect } from 'react';

const IDOAddress = '0xFeCbD9aB75Df837D6Fa5D0BC2F674C284eCA5886'

const IDOAbi = [
    "function soldAmount() view returns (uint)",
    "function isEnds() view returns (bool)",
    "function claimToken()",
    "function buy(uint256 usdtAmount)"
]

const USDTAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

const erc20Abi = [
    "function approve(address spender, uint256 amount) external returns (bool)",
    "function allowance(address owner, address spender) constant view returns (uint)"
]


const ICOForm = () => {
    // When the time zone offset is absent, date-only forms are interpreted as a UTC 
    // time and date-time forms are interpreted as local time.
    // const futureDate = new Date('2024-01-24T00:00:00'); // local timezone by default
    //or
    const futureDate = new Date('2024-01-09T00:00:00+09:00'); // korean timezone

    const { address, chainId, isConnected } = useWeb3ModalAccount()
    const { walletProvider } = useWeb3ModalProvider()
    const [signer, setSigner] = useState<ethers.Signer | undefined>(undefined);
    
    const [soldAmount, setSoldAmount] = useState('Loading...');
    const [percentage, setPercentage] = useState("0");
    const [isEnd, setIsEnd] = useState(false);
    const [price, setPrice] = useState(0.05);
    const [inputValue, setInputValue] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(true);
    const [usdtAmount, setUsdtAmount] = useState<number>(0);
    const [aboveLimit, setAboveLimit] = useState<boolean>(false);


    useEffect(() => {
        let num = 0;
        const getNum = async () => {
        try {
            const ethersProvider = new ethers.providers.Web3Provider(walletProvider as ethers.providers.ExternalProvider);
            const signer = ethersProvider.getSigner();
            const contract = new ethers.Contract(IDOAddress, IDOAbi, signer);
            const value = await contract.soldAmount();
            setSoldAmount(value.toString());
            num = value;
            const flag = await contract.isEnds();
            setIsEnd(flag);
            
            // console.log(flag)
        } catch (error) {
            console.error("Error fetching unlocked tokens:", error);
            setSoldAmount('Error fetching data');
        }
    };
        setPercentage(num /15000000*100+"%")

        if (num > 15000000*0.3) setPrice(0.1);
        // console.log(percentage)

        if (walletProvider) {
            getNum();
            const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
            setSigner(ethersProvider.getSigner());
        }
    }, [walletProvider]); // This effect depends on walletProvider

    async function claimToken(){
        if(!isConnected) throw Error("User is not connected")
    
        const contract = new ethers.Contract(IDOAddress, IDOAbi, signer)
        const idoWithSigner = contract.connect(signer as Signer);

        idoWithSigner.claimToken()
        
    }
      
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
        const parsedValue = parseFloat(event.target.value);
        // console.log(parsedValue);

        if (parsedValue > 10000) {
            setAboveLimit(true);
            setInputValue("");
            // console.log(usdtAmount)
            return;
        }
        else {
            setAboveLimit(false);
        }

        setUsdtAmount(Number((parsedValue * price).toFixed(6)) || 0);
        // if (!isNaN(parsedValue) && Number.isInteger(parsedValue*price)) {
        //     console.log("Parsed value:", parsedValue);
        //     setIsValid(true);
        // } else {
        //     setIsValid(false);
        // }
    }

    async function checkUsdtAllowance() {
        if (!walletProvider) throw new Error("Wallet provider is not available");
    
        const userAddress = await (signer as Signer).getAddress();
        const usdtContract = new ethers.Contract(USDTAddress, erc20Abi, signer);
    
        const allowance = await usdtContract.allowance(userAddress, IDOAddress);
        return allowance;
    }

    async function approveUsdtSpending() {
        
        if (!walletProvider) throw new Error("Wallet provider is not available");
        
        const usdtAmountToApprove = ethers.utils.parseUnits("1000", 6); // 1000 USDT (adjust decimals as needed)
    
        // Create a new instance of the USDT contract
        const usdtContract = new ethers.Contract(USDTAddress, erc20Abi, signer);
    
        // Call the approve function
        try {
            const tx = await usdtContract.approve(IDOAddress, usdtAmountToApprove);
            await tx.wait();  // Wait for the transaction to be mined
            console.log(`Approval successful. TxHash: ${tx.hash}`);
        } catch (error) {
            console.error("Approval failed", error);
            throw error;
        }
    }
    

    async function buyToken(usdtAmount: number){

        if(!isConnected) throw Error("User is not connected")
    
        const contract = new ethers.Contract(IDOAddress, IDOAbi, signer)
        const idoWithSigner = contract.connect(signer as Signer);

        try {
            const tx = await idoWithSigner.buy(ethers.utils.parseUnits(usdtAmount.toString(), 6));
            await tx.wait();
            console.log(`Purchase successful. TxHash: ${tx.hash}`);
        } catch (error) {
            console.error("Purchase failed", error);
            throw error;
        }        
    }

    async function approveAndBuy() {
        try {

            const allowance = await checkUsdtAllowance();

            // Check if the allowance is less than the amount they want to buy
            if (allowance.lt(ethers.utils.parseUnits(usdtAmount.toString(), 6))) {
                // If not enough allowance, approve first
                await approveUsdtSpending();
                console.log("USDT spending approved");
            }
            
            // Then, proceed to buy tokens
            await buyToken(usdtAmount);
            console.log("Token purchase successful");
        } catch (error) {
            console.error("Error in transaction process", error);
        }
    }

    return (
        <div className="bg-[#ffe49c] border-black border-[1px] min-w-[40%] py-6 md:py-10 px-6 md:px-12 rounded-xl shadow-md ">
            <div className="font-semibold">Pre ICO Ends in:</div>
                <Countdown targetDate={futureDate}/>
            <div className="w-full h-2 bg-[#7a5c47] rounded mt-4">
                <div
                className="h-full bg-[#FFC102] rounded"
                style={{
                    width: percentage,
                }}
                />
            </div>
            <div className="flex justify-between items-center mt-1 mb-4">
                <div className="text-xs">{soldAmount}KKC</div>
                <div className="text-xs">15,000,000KKC</div>
            </div>
            <p className="font-semibold text-left">
                Amount{" "}
                <span className="text-xs font-normal">(Price: {price}U)</span>
            </p>
            <div className="flex items-center space-x-2">
                <Input className="bg-[#7a5c47] rounded-md text-white" placeholder="0" value={inputValue} onChange={handleInputChange}/>
                {/* <Button className="bg-[#7a5c47] text-white">MAX</Button> */}
            </div>
            {/* {!isValid && <div className="text-[#ff7300db] text-sm mt-2">You can only purchase KKC with whole-number amounts of USDT.</div>} */}
            {aboveLimit && <div className="text-[#ff7300db] text-sm mt-2">You can only purchase 10,000 KKC max.</div>}
            
            <p className="mt-2">You will spend {usdtAmount} USDT</p>
            <div className="flex justify-around">
                <Button variant="outline" className="border-black border-[1px] w-1/3 mt-8 disabled:opacity-50" onClick={approveAndBuy} disabled={isEnd || !isValid || aboveLimit}>BUY</Button>
                <Button variant="outline" className="border-black border-[1px] bg-[#FFC102] w-1/3 mt-8 disabled:opacity-50" disabled={!isEnd} onClick={claimToken}>Claim Token</Button>
            </div>
        </div>
    )
}

export {ICOForm}