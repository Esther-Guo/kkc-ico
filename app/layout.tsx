import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from "next/link"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { MobileNav } from '@/components/ui/mobileNav'
import { Wallet, Menu } from 'lucide-react'
import { Web3ModalProvider } from "../context/Web3Modal";
import { NavConnectButton } from '@/components/ui/walletConnect'
import { SocialLinks } from '@/components/ui/socialLinks'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KKC',
  description: 'Generated by create next app',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3ModalProvider>
          <nav className="flex justify-between items-center px-4 md:px-20 py-4 bg-black text-white relative z-10">
            <div className="flex items-center">
              <MobileNav />
              <div className="ml-2 md:ml-0">
                <Image
                  src="/logo.png"
                  alt="KakaoCoin logo"
                  width={120}
                  height={24}
                  priority
                />
              </div>
              <div className="hidden md:flex ml-8">
                <Link href="/" className="text-sm mr-4">
                  HOME
                </Link>
                <Link href="/ico" className="text-sm">
                  ICO
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <NavConnectButton />
            </div>
          </nav>
          <div className="flex flex-col items-center">
            {children}
          </div>
          <footer className="relative mt-20 bg-[#FFC102] px-8 md:px-32 py-16">
            <div className="absolute left-[5%] transform -translate-y-2/3 top-0">
            <Image 
              src="/footer.png"
              alt="footer bear"
              width={128}
              height={180}
            />
            </div>
            <div className="md:flex justify-between">
              <div className="w-full md:w-1/4 flex flex-col items-center">
                <Image
                  src="/footerLogo.png"
                  alt="KakaoCoin logo"
                  width={240}
                  height={40}
                />
                <p className="mt-6 text-center md:text-left text-sm md:text-base">
                  By establishing a truly decentralized social aggregation platform, we aim to pioneer innovative social
                  models and enhance the social experience in the Web3 digital era!
                </p>
              </div>
              <div className="grid grid-cols-3 gap-10 md:gap-4 mt-8 md:mt-0">
                <div>
                  <h3 className="font-bold mb-4">About</h3>
                  <ul className="space-y-2 text-sm md:text-base">
                    <li>
                      <Link className="text-white" href="#">
                        Help
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white" href="#">
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white" href="#">
                        Docs
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white" href="#">
                        Platform status
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-4">Info</h3>
                  <ul className="space-y-2 text-sm md:text-base">
                    <li>
                      <Link className="text-white" href="#">
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white" href="#">
                        Privacy Policies
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white" href="#">
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <a target="_blank" href="https://t.me/+4NYupYth-xdjZGI1" rel="noopener noreferrer" className="text-white">
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-4">Touch</h3>
                  <SocialLinks/>
                  {/* <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0">
                    <DiscordIcon />
                    <TwitterIcon  />
                    <Button variant="nav" size="icon" onClick={() => open("https://t.me/+D2IgLr2mUp84Mjk1")}>
                        <TelegramIcon />
                    </Button>
                  </div> */}
                </div>
              </div>
            </div>
          </footer>
        </Web3ModalProvider>
      </body>
    </html>
  )
}

