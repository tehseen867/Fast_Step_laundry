import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-white/10 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:space-y-4">
            <Image
src={"/logo.png"}              alt="Fast Step Laundry Logo"
              width={180}
              height={40}
              className="h-28 w-auto md:-my-5 -mb-8"
            />
            <p className="text-sm text-gray-800">
              Professional laundry service at your doorstep. Quality cleaning, fast delivery.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold md:mb-4 mb-2 bg-clip-text text-transparent bg-gradient-to-b from-blue-600 to-blue-400">Quick Links</h3>
            <ul className="md:space-y-2 space-y-1">
              <li>
                <Link href="/services" className="text-sm text-gray-800 hover:text-blue-500">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-gray-800 hover:text-blue-500">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-800 hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-800 hover:text-blue-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-800 hover:text-blue-500">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold  md:mb-4 mb-2 bg-clip-text text-transparent bg-gradient-to-b from-blue-600 to-blue-400">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-800"><strong className="text-gray-700">Address: </strong>Near Dow Hospital</li>
              <li className="text-sm text-gray-800">Scheme 33, Karachi</li>
              <li className="text-sm text-gray-800"><strong className="text-gray-700">Phone: </strong> +923324189074</li>
              <li className="text-sm text-gray-800"><strong className="text-gray-700">Email:</strong> fast.step.laundry@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold  md:mb-4 mb-2 bg-clip-text text-transparent bg-gradient-to-b from-blue-600 to-blue-400">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=61573060392789" className="text-gray-800 hover:text-blue-500">
                <Facebook className="h-5 w-6" />
              </Link>
              <Link href="https://www.instagram.com/" className="text-gray-800 hover:text-blue-500">
                <Instagram className="h-5 w-6" />
              </Link>
            
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-gray-800">
            © {new Date().getFullYear()} Fast Step Laundry Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

