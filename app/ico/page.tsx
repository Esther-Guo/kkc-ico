/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yd0S3GeWc0T
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div key="1" className="bg-[#FFCC00] min-h-screen">
      <div className="text-center p-8">
        <img
          alt="Kakao Coin Mascot"
          height="200"
          src="/placeholder.svg"
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          width="200"
        />
        <div className="bg-white inline-block p-4 my-4 rounded-lg shadow-md">
          <div className="text-2xl font-bold">Pre ICO Ends in:</div>
          <div className="flex justify-center space-x-2 mt-2">
            <div className="bg-[#FFD700] p-4 rounded-md">
              <div className="text-3xl font-bold">30</div>
              <div className="text-sm">DAYS</div>
            </div>
            <div className="bg-[#FFD700] p-4 rounded-md">
              <div className="text-3xl font-bold">00</div>
              <div className="text-sm">HOURS</div>
            </div>
            <div className="bg-[#FFD700] p-4 rounded-md">
              <div className="text-3xl font-bold">00</div>
              <div className="text-sm">MIN</div>
            </div>
            <div className="bg-[#FFD700] p-4 rounded-md">
              <div className="text-3xl font-bold">00</div>
              <div className="text-sm">SEC</div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-left">
              <div className="text-sm">5,000,000KKC</div>
              <div className="text-sm">15,000,000KKC</div>
            </div>
            <div className="flex items-center space-x-2">
              <Input className="border-2 border-black rounded-md" placeholder="0.00" />
              <Button className="bg-black text-white">MAX</Button>
            </div>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded mt-4">
            <div
              className="h-full bg-green-500 rounded"
              style={{
                width: "50%",
              }}
            />
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <Button className="bg-black text-white">BUY</Button>
          </div>
        </div>
      </div>
      <div className="bg-white mx-8 my-4 p-4 rounded-lg shadow-md">
        <div className="grid grid-cols-2 gap-4">
          <div>OPE to be claimed</div>
          <div>XXX</div>
          <div>Status</div>
          <div>inprogress</div>
          <div>Sale type</div>
          <div>public</div>
          <div>Minimum Buy</div>
          <div>0.1KKC</div>
          <div>Maximum Buy</div>
          <div>100000KKC</div>
          <div>The first round quota 30%</div>
          <div>0.05U</div>
          <div>The second round quota 70%</div>
          <div>0.1U</div>
        </div>
      </div>
    </div>
  )
}

