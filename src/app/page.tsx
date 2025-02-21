import { Button } from "@/app/components/ui/button"
import Link from "next/link"
import { Truck, Timer, Sparkles, ShieldCheck } from "lucide-react"
import Image from "next/image"
import { Carpet_discount } from "./components/carpet"
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-10 bg-gradient-to-b from-blue-200 to-gray-50 flex flex-col-reverse md:flex-row">
        <div className="container flex justify-center items-center">

          <div className="flex-1 text-center  md:text-left space-y-6">
          <h1 className="flex flex-col sm:gap-y-3 gap-y-1">

              <p className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-blue-800">Professional Laundry</p> 
              <p className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-blue-800">Service at Your</p>
              <p className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-blue-800"> Doorstep</p>
              
            </h1>
            <p className="lg:text-xl text-sm sm:text-lg font-semibold ">
              We pick up, clean, and deliver your laundry with care and efficiency.
            </p>
            <div className="flex flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="lg:flex hidden">
                <Link href="/services">Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="flex lg:hidden">
            <Link href="/donate" >Donate Clothes</Link>
          </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-end sm:justify-center">
      <Image src={"/heroImage.svg"} height={1000} width={1000} alt="washing-clothes" className="h-auto md:w-[700px] w-[400px] lg:w-[900px]"> 

      </Image>
      </div>
      </section>

      {/* Features Section */}
      <section className="py-20" id="services">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700 mb-12">Why Choose Fast Step Laundry?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center border p-6 rounded bg-gradient-to-b from-blue-200 to-gray-50 bg-card ">
              <Truck className="h-12 w-12  mb-4  text-blue-600" />
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-800 ">Free Pickup & Delivery</h3>
              <p className="text-muted-foreground">Order Upto Rs 1000/- To get free pickup and delivery service</p>
            </div>
            <div className="flex flex-col items-center text-center border p-6 rounded bg-gradient-to-b from-blue-200 to-gray-50 bg-card">
              <Timer className="h-12 w-12  text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-800">24-Hour Turnaround</h3>
              <p className="text-muted-foreground">Quick service when you need it most</p>
            </div>
            <div className="flex flex-col items-center text-center border p-6 rounded bg-gradient-to-b from-blue-200 to-gray-50 bg-card">
              <Sparkles className="h-12 w-12  text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-800">Premium Quality</h3>
              <p className="text-muted-foreground">Expert cleaning for all types of garments</p>
            </div>
            <div className="flex flex-col items-center text-center border p-6 rounded bg-gradient-to-b from-blue-200 to-gray-50 bg-card">
              <ShieldCheck className="h-12 w-12  text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-800">Satisfaction Guaranteed</h3>
              <p className="text-muted-foreground">Your satisfaction is our top priority</p>
            </div>
          </div>
        </div>
      </section>
<Carpet_discount/>
      {/* Pricing Section */}
      <section className="py-20 bg-slate-50" id="pricing">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">Our Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white lg:p-8 p-6 rounded-lg  border  bg-gradient-to-t from-blue-200 to-gray-50">
              <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-900 ">Wash only</h3>
              <p className="md:text-lg text-sm px-[2px] font-serif text-gray-400 mb-4">Starts from Rs 30/-</p>
           
              <ul className="space-y-3 mb-6">
                <li className="flex items-center justify-between">
                  <span className="text-primary mr-2">✓ Shalwar Suit</span>
             
                  <span className="text-end">Rs 100/-</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-primary mr-2">✓ Formal Shirt</span>
             
                  <span className="text-end">Rs 60/-</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-primary mr-2">✓ Pant</span>
             
                  <span className="text-end">Rs 60/-</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-primary mr-2">✓ Hoodie</span>
             
                  <span className="text-end">Rs 100/-</span>
                </li>
              </ul>
              <Link href={"/pricing"}><Button className="w-full">
                View All
              </Button></Link>
            </div>
            <div className="bg-white lg:p-8 p-6 rounded-lg  border  relative  bg-gradient-to-t from-blue-200 to-gray-50">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
                Popular
              </div>
              <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-900 ">Wash & Iron</h3>
              <p className="md:text-lg text-sm px-[2px] text-gray-400 font-serif mb-4">Starts from Rs 50/-</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center justify-between">
                  <span className="text-primary mr-2">✓ Shalwar Suit</span>
             
                  <span className="text-end">Rs 150/-</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-primary mr-2">✓ Formal Shirt</span>
             
                  <span className="text-end">Rs 100/-</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-primary mr-2">✓ Pant</span>
             
                  <span className="text-end">Rs 100/-</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-primary mr-2">✓ Hoodie</span>
             
                  <span className="text-end">Rs 200/-</span>
                </li>
              </ul>
              <Link href={"/pricing"}><Button className="w-full" variant="outline">
                View All
              </Button></Link>
            </div>
            <div className="bg-white lg:p-8 p-6 rounded-lg  border  bg-gradient-to-t from-blue-200 to-gray-50">
            <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-900 ">Iron only</h3>
            <p className="md:text-lg text-sm px-[2px] text-gray-400 mb-4 font-serif">Starts from Rs 30/-</p>
            <ul className="space-y-3 mb-6">
                <li className="flex items-center justify-between">
                  <span className="text-primary mr-2">✓ Shalwar Suit</span>
             
                  <span className="text-end">Rs 80/-</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-primary mr-2">✓ Formal Shirt</span>
             
                  <span className="text-end">Rs 40/-</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-primary mr-2">✓ Pant</span>
             
                  <span className="text-end">Rs 40/-</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-primary mr-2">✓ Hoodie</span>
             
                  <span className="text-end">Rs 120/-</span>
                </li>
              </ul>
              <Link href={"/pricing"}><Button className="w-full" >
                View All
              </Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sm:py-20 py-10 bg-gradient-to-b from-blue-200 to-gray-50 text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700 font-bold  sm:mb-6 mb-4">Ready to Experience Premium Laundry Service?</h2>
          <p className="sm:text-xl text-sm sm:mb-8 mb-6 text-black/60 opacity-90">Join thousands of satisfied customers who trust Fast Step Laundry</p>
          <Button size="lg" asChild>
            <Link href="https://wa.me/923324189074?">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

