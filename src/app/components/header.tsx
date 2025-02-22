import Link from "next/link"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { House, Info, Menu, Phone } from "lucide-react"
import { MdMiscellaneousServices } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" pr-1 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
          src={"/logo.png"}
            alt="Fast Step Laundry Logo"
            width={1000}
            height={1000}
            className="h-40 w-auto"
          />
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-600 to-blue-400  hover:text-primary">
            Home
          </Link>
          <Link href="/services" className="text-lg bg-clip-text text-transparent bg-gradient-to-b  from-blue-600 to-blue-400 font-bold hover:text-primary">
            Services
          </Link>
          <Link href="/pricing" className="text-lg bg-clip-text text-transparent bg-gradient-to-b  from-blue-600 to-blue-400 font-bold hover:text-primary">
            Pricing
          </Link>
          <Link href="/about" className="text-lg bg-clip-text text-transparent bg-gradient-to-b  from-blue-600 to-blue-400 font-bold hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-lg bg-clip-text text-transparent bg-gradient-to-b  from-blue-600 to-blue-400 font-bold hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
        
          <Button asChild className="lg:flex hidden">
            <Link href="/donate">Donate Clothes</Link>
          </Button>
        </div>


        <Sheet >
  <SheetTrigger className="md:hidden">  <Menu className="h-8 w-8" /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>   <nav className="flex flex-col gap-8">
              <Link href="/" className="text-lg font-medium hover:text-primary flex items-center gap-x-2">
              <House />Home
              </Link>
              <Link href="/services" className="text-lg font-medium hover:text-primary flex items-center gap-x-2">
              <MdMiscellaneousServices size={24} />Services
              </Link>
              <Link href="/pricing" className="text-lg font-medium hover:text-primary flex items-center gap-x-2">
              <IoMdPricetags size={23} />Pricing
              </Link>
              <Link href="/about" className="text-lg font-medium hover:text-primary flex items-center gap-x-2">
              <Info /> About
              </Link>
              <Link href="/contact" className="text-lg font-medium hover:text-primary flex items-center gap-x-2">
              <Phone />Contact
              </Link>
              <Button className=" w-[90%] rounded-sm mt-8" size="sm" asChild>
                <Link href="/donate">Donate Clothes</Link>
              </Button>
            </nav></SheetTitle>
      <SheetDescription>
   
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

      </div>
    </header>
  )
}

