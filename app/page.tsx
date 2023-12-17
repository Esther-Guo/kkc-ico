import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="bg-white flex flex-col items-center">
      <header className="relative overflow-hidden h-[700px] w-full">
          <div className="absolute bg-[#FFC102] h-[800px] w-[120%] rounded-[50%] -translate-x-[9%] -translate-y-[25%]">
            <div className="flex flex-col w-1/3 translate-y-80 translate-x-64">
              <h1 className="text-5xl font-bold uppercase text-left mb-6">WEB3.0 / GAMEFI</h1>
              <h1 className="text-5xl font-bold uppercase text-left">SOCIALFI / PAY / DAO</h1>
              <p className="mt-4 mb-8 text-left font-semibold">
                By establishing a truly decentralized social <br/> aggregation platform, we aim to pioneer innovative <br/> social models
                and enhance the social experience in <br/> the Web3 digital era!
              </p>
              <div className="flex justify-start space-x-8">
                <Button className="bg-[#412122] text-[#FFC102] w-1/4">Connect Wallet</Button>
                <Button variant="outline" className="border-black border-2 w-1/4">Home</Button>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-20">
            <Image
            src="/homepage.png"
            alt="Homepage background"
            width={800}
            height={400}
            />
          </div>
      </header>
      <div>
        <Button className="bg-[#FFC102] text-white w-52 flex justify-between p-4">
          <Link className="text-white" href="/whitepaper">
            White paper
          </Link>
          <Image
            src="/arrowIcon.png"
            alt="Arrow icon"
            width={36}
            height={36}
          />
        </Button>
      </div>
      
      <main className="grid grid-cols-1 min-h-[500px] md:grid-cols-3 gap-10 py-8 px-24">
        <Card className="bg-[#ffeca4] relative">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">SOCIAL SPACE</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              KakaoCoin aims to create a social aggregation platform which is capable of accommodating blockchain
              ecosystems.
            </p>
          <div className="absolute bottom-0 right-4">
          <Image
            src="/person_1.png"
            alt="person one background"
            width={250}
            height={200}
          />
          </div>
          </CardContent>
        </Card>
        <Card className="bg-[#ffd49c] relative">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">SOCIAL METAVERSE</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The mission to realize innovative human interactions in the digital space. Participants create user
              accounts with a unique identity ID generated through mnemonic passphrases and public keys.
            </p>
            <div className="absolute bottom-0 right-4">
            <Image
              src="/person_2.png"
              alt="person two background"
              width={200}
              height={150}
            />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#c0dcb4] relative">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">KKC SOCIALFI MODEL</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              SocialFi refers to SocialFinance, which essentially means the organic integration of social and financial
              activities on the blockchain.
            </p>
            <div className="absolute bottom-0 right-4">
            <Image
              src="/person_3.png"
              alt="person three background"
              width={250}
              height={200}
            />
            </div>
          </CardContent>
        </Card>
      </main>
      
      <h2 className="text-3xl font-bold mt-16">KKC&apos;S FUTURE PLANS</h2>
      <p className="my-8 w-1/2 text-center">
        In the future, KakaoCoin will continue to enhance and add various features to its platform, with a primary
        focus on social communication and a supplementary role for the wallet. These additions will further integrate
        the community, DAO, and Gamefi
      </p>
      
    </div>
  )
}
