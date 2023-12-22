"use client"

import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers5/react'
import { Button } from './button'
import { Wallet } from 'lucide-react'
import clsx from 'clsx'

const NavConnectButton = () => {
    const { open } = useWeb3Modal();
    const { isConnected } = useWeb3ModalAccount();
    return (
        <>
        {isConnected?
        <w3m-account-button /> :
        <>
        <Button className="bg-[#FFC102] text-white hidden md:flex" onClick={() => open()}>
            <Wallet className="mr-2"/>
            Connect Wallet
        </Button>
        <Button variant="nav" size="icon" className="md:hidden text-white" onClick={() => open()}>
            <Wallet className="h-6 w-6"/>
        </Button>
        </>
        }
        </>
    )
}

const HomeConnectButton = () => {
    const { open } = useWeb3Modal();
    const { isConnected } = useWeb3ModalAccount();

    return (
        <>
        
        
        <Button className={clsx("bg-[#412122] text-[#FFC102] w-2/5 md:w-1/4",
        {
            "hidden": isConnected
        }
        )} onClick={() => open()}>Connect Wallet</Button>
        
        </>
    )
}
export { NavConnectButton, HomeConnectButton }
