"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Countdown } from "@/components/ui/countdown"

const ICOForm = () => {
    // When the time zone offset is absent, date-only forms are interpreted as a UTC 
    // time and date-time forms are interpreted as local time.
    const futureDate = new Date('2023-12-31T23:59:59'); // local timezone by default
    //or
    // const futureDate = new Date('2023-12-31T23:59:59+08:00'); // local timezone

    return (
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
    )
}

export {ICOForm}