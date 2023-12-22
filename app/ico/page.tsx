import Image from "next/image"
import { ICOForm } from "@/components/ui/ICOForm"
import { BalanceBtn } from "@/components/ui/showBalance"

export default function ICO() {
    

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

                <ICOForm />
        
                
            </section>

            {/* <BalanceBtn /> */}
        
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

