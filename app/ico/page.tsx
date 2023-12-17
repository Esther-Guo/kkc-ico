import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ICO() {
  return (
    <div className="min-h-screen bg-white w-full">
        <main>
            <section className="px-20 py-10 bg-[#FFC102] relative w-full flex justify-end">
                <div className="absolute left-10 bottom-10">
                <Image
                src="/ico.png"
                alt="ICO background"
                width={400}
                height={400}
                />
                </div>
        
                <div className="bg-[#ffe49c] border-black border-[1px] min-w-[40%] py-10 px-12 rounded-xl shadow-md ">
                    <div className="font-semibold">Pre ICO Ends in:</div>
                    <div className="flex justify-center space-x-2 mt-6 text-white text-center items-center">
                        <div className="bg-[#7a5c47] p-4 rounded-xl">
                            <div className="text-4xl font-bold mb-2 font-mono">30</div>
                            <div className="text-sm">DAYS</div>
                        </div>
                        <div className="text-[#7a5c47] text-4xl">:</div>
                        <div className="bg-[#7a5c47] p-4 rounded-xl">
                            <div className="text-4xl font-bold mb-2 font-mono">00</div>
                            <div className="text-sm">HOURS</div>
                        </div>
                        <div className="text-[#7a5c47] text-4xl">:</div>
                        <div className="bg-[#7a5c47] p-4 rounded-xl">
                            <div className="text-4xl font-bold mb-2 font-mono">00</div>
                            <div className="text-sm">MIN</div>
                        </div>
                        <div className="text-[#7a5c47] text-4xl">:</div>
                        <div className="bg-[#7a5c47] p-4 rounded-xl">
                            <div className="text-4xl font-bold mb-2 font-mono">00</div>
                            <div className="text-sm">SEC</div>
                        </div>
                    </div>
                    <div className="w-full h-2 bg-[#7a5c47] rounded mt-4">
                        <div
                        className="h-full bg-[#FFC102] rounded"
                        style={{
                            width: "50%",
                        }}
                        />
                    </div>
                    <div className="flex justify-between items-center mt-1 mb-4">
                        <div className="text-xs">5,000,000KKC</div>
                        <div className="text-xs">15,000,000KKC</div>
                    </div>
                    <p className="font-semibold text-left">
                        Amount{" "}
                        <span className="text-xs font-normal">(Price: 0.05U)</span>
                    </p>
                    <div className="flex items-center space-x-2">
                        <Input className="bg-[#7a5c47] rounded-md text-white" placeholder="0.00" />
                        <Button className="bg-[#7a5c47] text-white">MAX</Button>
                    </div>
                    <div className="flex justify-center">
                        <Button variant="outline" className="border-black border-[1px] w-1/3 mt-8">BUY</Button>
                    </div>
                </div>
            </section>
        
            <div className="bg-[#fff4cc] border-black border-[1px] mx-24 my-16 py-6 px-36 rounded-xl shadow-md">
                <div className="grid grid-cols-2 gap-4 place-content-around font-semibold">
                    <div>OPE to be claimed</div>
                    <div className="text-right">XXX</div>
                    <div>Status</div>
                    <div className="text-right">inprogress</div>
                    <div>Sale type</div>
                    <div className="text-right">public</div>
                    <div>Minimum Buy</div>
                    <div className="text-right">0.1KKC</div>
                    <div>Maximum Buy</div>
                    <div className="text-right">10000KKC</div>
                    <div>The first round quota 30%</div>
                    <div className="text-right">0.05U</div>
                    <div>The second round quota 70%</div>
                    <div className="text-right">0.1U</div>
            </div>
            </div>
        </main>
    </div>
  )
}

