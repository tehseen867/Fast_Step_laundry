import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import Link from "next/link"
import { Award, Users, Leaf, Timer } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="sm:py-20 py-10 bg-gradient-to-b from-blue-100 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter sm:mb-6 mb-2 bg-clip-text text-transparent bg-gradient-to-b from-blue-500 py-2  to-blue-800">About Fast Step Laundry</h1>
            <p className="sm:text-xl text-lg  text-muted-foreground mb-8">
              Your trusted partner in professional laundry services since 2024
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="md:py-20 py-10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Fast Step Laundry was founded with a simple mission: to provide busy professionals and families with
                convenient, high-quality laundry services that save time and deliver exceptional results.
              </p>
              <p className="text-muted-foreground mb-6">
                What started as a small local service has grown into a trusted name in professional laundry care,
                serving thousands of satisfied customers across the city.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold  mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">2000+</div>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div>
                  <div className="text-3xl font-bold  mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">7000+</div>
                  <p className="text-sm text-muted-foreground">Orders Completed</p>
                </div>
              </div>
            </div>
            <div className="relative h-[350px]">
              <Image src="/washing-machine.svg" alt="Laundry Service" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="md:py-20 py-10 bg-blue-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-800">Quality First</h3>
              <p className="text-muted-foreground">We never compromise on the quality of our service</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-800">Customer Focus</h3>
              <p className="text-muted-foreground">Your satisfaction is our top priority</p>
            </div>
            <div className="text-center">
              <Leaf className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-800">Eco-Friendly</h3>
              <p className="text-muted-foreground">Committed to sustainable practices</p>
            </div>
            <div className="text-center">
              <Timer className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-800">Reliability</h3>
              <p className="text-muted-foreground">On-time service you can count on</p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="sm:py-20 py-10 bg-gradient-to-b from-blue-200 to-gray-50 text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700 font-bold  sm:mb-6 mb-4">Ready to Experience Premium Laundry Service?</h2>
          <p className="sm:text-xl text-sm sm:mb-8 mb-6 text-black/60 opacity-90">Join thousands of satisfied customers who trust Fast Step Laundry</p>
          <Button size="lg" asChild >
            <Link href="https://wa.me/923324189074?">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

