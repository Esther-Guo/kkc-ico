"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import clsx from "clsx"

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("home");

    return (
      <div className="md:hidden">
        <Button variant="nav" size="icon" className="text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
        </Button>
        {/* Fullscreen menu overlay */}
        {isOpen && (
            <div className="fixed top-0 left-0 h-full w-full bg-black z-50">
                <div className="flex flex-col items-start justify-start h-full p-4 pl-6">
                    <Button size="icon" className="text-white bg-black" onClick={() => setIsOpen(false)}>
                        <X className="h-10 w-10"/>
                    </Button>
                    <div className="bg-white/30 h-[1px] w-full mt-2"></div>
                    <div className="flex flex-col mt-8 space-y-6">
                        <Link href="/" className={clsx("text-xl",
                            {
                                "text-white": active === "home",
                                "text-white/50": active !== "home",
                            }
                            )}
                            onClick={() => {setIsOpen(false); setActive("home")}}>
                        HOME
                        </Link>
                        <Link href="/ico" className={clsx("text-xl",
                            {
                                "text-white": active === "ico",
                                "text-white/50": active !== "ico",
                            }
                            )}
                        
                            onClick={() => {setIsOpen(false); setActive("ico")}}>
                        ICO
                        </Link>
                    </div>
                </div>
            </div>
        )}
      </div>
    )
  }

export { MobileNav };