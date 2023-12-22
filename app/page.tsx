import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { HomeConnectButton } from "@/components/ui/walletConnect"

export default function Home() {
  return (
    <div className="bg-white flex flex-col items-center">
      <header className="relative overflow-hidden h-[320px] md:h-[700px] w-full">
          <div className="absolute bg-[#FFC102] h-[450px] md:h-[800px] w-[120%] rounded-[30%] md:rounded-[50%] -translate-x-[9%] -translate-y-[35%] md:-translate-y-[25%]">
            <div className="flex flex-col w-[75%] md:w-1/2 translate-y-48 translate-x-16 md:translate-y-80 md:translate-x-64">
              <h1 className="text-2xl md:text-5xl font-bold uppercase text-left mb-2 md:mb-6">WEB3.0 / GAMEFI</h1>
              <h1 className="text-2xl md:text-5xl font-bold uppercase text-left">SOCIALFI / PAY / DAO</h1>
              <p className="mt-4 mb-8 text-left text-xs md:font-semibold md:text-base">
                By establishing a truly decentralized social <br/> aggregation platform, we aim to pioneer innovative <br/> social models
                and enhance the social experience in <br/> the Web3 digital era!
              </p>
              <div className="flex justify-start space-x-8">
                <HomeConnectButton />
                {/* <Button className="bg-[#412122] text-[#FFC102] w-2/5 md:w-1/4">Connect Wallet</Button> */}
                {/* <Button variant="outline" className="border-black border-[1px] bg-white/50 w-2/5 md:w-1/4">Home</Button> */}
              </div>
            </div>
          </div>
          <div className="absolute top-50 -right-10 md:top-20 opacity-40 md:opacity-100">
            <Image
            src="/homepage.png"
            alt="Homepage background"
            width={800}
            height={400}
            />
          </div>
      </header>
      <div className="mb-4 md:mb-8 w-3/4 md:w-1/2 rounded-2xl overflow-hidden relative">
        <video src="/Kakaocoin.mp4" controls />
      </div>
      <div>
        <a target="_blank" href="https://rms9ofttwfi9neta.public.blob.vercel-storage.com/whitepaper.pdf" rel="noopener noreferrer" 
            className="bg-[#FFC102] text-white w-72 md:w-60 flex justify-between items-center px-6 py-2 md:px-4 md:py-2 rounded-xl">
          <p>White paper</p>
          <Image
          src="/arrowIcon.png"
          alt="Arrow icon"
          width={36}
          height={36}
          />
        </a>
        {/* <Link className="bg-[#FFC102] text-white w-72 md:w-60 flex justify-between items-center px-6 py-2 md:px-4 md:py-2 rounded-xl" href="/whitepaper">
          <p>White paper</p>
          <Image
          src="/arrowIcon.png"
          alt="Arrow icon"
          width={36}
          height={36}
          />
        </Link> */}
      </div>
      
      <main className="grid grid-cols-1 min-h-[500px] md:grid-cols-3 gap-10 py-8 px-10 md:px-24">
        <Card className="bg-[#ffeca4] relative min-h-[250px] md:min-h-fit">
          <CardHeader>
            <CardTitle className="text-xl md:text-3xl font-bold">SOCIAL SPACE</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base">
              KakaoCoin aims to create a social aggregation platform which is capable of accommodating blockchain
              ecosystems.
            </p>
          <div className="hidden md:block absolute bottom-0 right-4">
            <Image
              src="/person_1.png"
              alt="person one background"
              width={250}
              height={200}
            />
          </div>
          <div className="absolute md:hidden bottom-0 right-4">
            <Image
              src="/person_1.png"
              alt="person one background"
              width={120}
              height={200}
            />
          </div>
          </CardContent>
        </Card>
        <Card className="bg-[#ffd49c] relative min-h-[250px] md:min-h-fit">
          <CardHeader>
            <CardTitle className="text-xl md:text-3xl font-bold">SOCIAL METAVERSE</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base">
              The mission to realize innovative human interactions in the digital space. Participants create user
              accounts with a unique identity ID generated through mnemonic passphrases and public keys.
            </p>
            <div className="hidden md:block absolute bottom-0 right-4">
            <Image
              src="/person_2.png"
              alt="person two background"
              width={200}
              height={150}
            />
            </div>
            <div className="absolute md:hidden bottom-0 right-4 opacity-60">
            <Image
              src="/person_2.png"
              alt="person two background"
              width={120}
              height={200}
            />
          </div>
          </CardContent>
        </Card>
        <Card className="bg-[#c0dcb4] relative min-h-[250px] md:min-h-fit">
          <CardHeader>
            <CardTitle className="text-xl md:text-3xl font-bold">KKC SOCIALFI MODEL</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base">
              SocialFi refers to SocialFinance, which essentially means the organic integration of social and financial
              activities on the blockchain.
            </p>
            <div className="hidden md:block absolute bottom-0 right-4">
            <Image
              src="/person_3.png"
              alt="person three background"
              width={250}
              height={200}
            />
            </div>
            <div className="absolute md:hidden bottom-0 right-4">
            <Image
              src="/person_3.png"
              alt="person three background"
              width={120}
              height={200}
            />
          </div>
          </CardContent>
        </Card>
      </main>
      
      <h2 className="text-xl md:text-3xl font-bold mt-8 md:mt-16">KKC&apos;S FUTURE PLANS</h2>
      <p className="my-10 w-3/4 md:w-1/2 text-center">
        In the future, KakaoCoin will continue to enhance and add various features to its platform, with a primary
        focus on social communication and a supplementary role for the wallet. These additions will further integrate
        the community, DAO, and Gamefi
      </p>
      
    </div>
  )
}
