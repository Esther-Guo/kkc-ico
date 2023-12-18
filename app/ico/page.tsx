import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Countdown } from "@/components/ui/countdown"

export default function ICO() {
    // When the time zone offset is absent, date-only forms are interpreted as a UTC 
    // time and date-time forms are interpreted as local time.
    const futureDate = new Date('2023-12-31T23:59:59'); // local timezone by default
    //or
    // const futureDate = new Date('2023-12-31T23:59:59+08:00'); // local timezone

  return (
    <div className="min-h-screen bg-white w-full">
        <main>
            <section className="px-4 md:px-20 py-10 bg-[#FFC102] relative w-full flex justify-center md:justify-end">
                <div className="hidden md:block absolute left-20 bottom-10">
                <Image
                src="/ico.png"
                alt="ICO background"
                width={500}
                height={500}
                />
                </div>
        
                <div className="bg-[#ffe49c] border-black border-[1px] min-w-[40%] py-6 md:py-10 px-6 md:px-12 rounded-xl shadow-md ">
                    <div className="font-semibold">Pre ICO Ends in:</div>
                        <Countdown targetDate={futureDate}/>
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
        
            <div className="bg-[#fff4cc] border-black border-[1px] mx-4 md:mx-24 my-12 md:my-16 py-6 px-4 md:px-36 rounded-xl shadow-md">
                <div className="grid grid-cols-2 gap-4 place-content-around md:font-semibold">
                    <div>OPE to be claimed</div>
                    <div className="text-right">XXX</div>
                    <div>Status</div>
                    <div className="text-right">inprogress</div>
                    <div>Sale type</div>
                    <div className="text-right">public</div>
                    <div>Minimum Buy</div>
                    <div className="text-right">0.1 KKC</div>
                    <div>Maximum Buy</div>
                    <div className="text-right">10,000 KKC</div>
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

