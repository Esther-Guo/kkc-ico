import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div key="1" className="bg-white">
      <header className="p-8">
        <h1 className="text-5xl font-bold uppercase text-left">WEB3.0 / GAMEFI SOCIALFI / PAY / DAO</h1>
        <p className="mt-4 mb-8 text-left">
          By establishing a truly decentralized social aggregation platform, we aim to pioneer innovative social models
          and enhance the social experience in the Web3 digital era!
        </p>
        <div className="flex justify-start space-x-4">
          <Button className="bg-black text-white">Connect Wallet</Button>
          <Button variant="outline">Home</Button>
        </div>
        <img
          alt="Social interaction illustration"
          className="mt-8 mx-auto"
          height="200"
          src="/placeholder.svg"
          style={{
            aspectRatio: "600/200",
            objectFit: "cover",
          }}
          width="600"
        />
      </header>
      <div className="text-center p-8">
        <Button className="bg-[#FFC102] text-white">
          <Link className="text-white" href="/whitepaper">
            White paper
          </Link>
        </Button>
      </div>
      <main className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        <Card className="bg-[#f9d94950]">
          <CardHeader>
            <CardTitle>SOCIAL SPACE</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              KakaoCoin aims to create a social aggregation platform which is capable of accommodating blockchain
              ecosystems.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#ff890281]">
          <CardHeader>
            <CardTitle>SOCIAL METAVERSE</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The mission to realize innovative human interactions in the digital space. Participants create user
              accounts with a unique identity ID generated through mnemonic passphrases and public keys.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#66A86090]">
          <CardHeader>
            <CardTitle>KKC SOCIALFI MODEL</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              SocialFi refers to SocialFinance, which essentially means the organic integration of social and financial
              activities on the blockchain.
            </p>
          </CardContent>
        </Card>
      </main>
      <section className="bg-white p-8">
        <h2 className="text-3xl font-bold">KKC&apos;S FUTURE PLANS</h2>
        <p className="mt-4">
          In the future, KakaoCoin will continue to enhance and add various features to its platform, with a primary
          focus on social communication and a supplementary role for the wallet. These additions will further integrate
          the community, DAO, and Gamefi
        </p>
      </section>
      
    </div>
  )
}
