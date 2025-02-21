import { Button } from "@/app/components/ui/button"
import Image from "next/image"
import Link from "next/link"
export function Carpet_discount() {
  return (
    <div className="" >
      <div className=" overflow-hidden flex flex-col lg:flex-row justify-between">
        <Image
        src="/carpet.jpg"
          alt="carpet"
          className=" h-[400px]"
          width={1000}
          height={1000}
        />
        <div className="bg-gradient-to-r from-blue-200 to-gray-100  flex items-center">
          <div className="p-8">
            <div className="inline-block bg-black text-white px-3 py-1 text-sm rounded-full mb-4">
              SALE UP TO 20% OFF
            </div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700 mb-4">
            Professional Carpet Cleaning 
            </h2>
            <p className="text-gray-500 mb-6">Revive your carpets with our deep-cleaning service. Remove stains, dust, and allergens .book now and save 20%! </p>
            <Link href={"/pricing"}>
            <Button>
              View Pricing →
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

