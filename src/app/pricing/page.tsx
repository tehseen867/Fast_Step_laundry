"use client"
import { Button } from "@/app/components/ui/button"
import Link from "next/link"
import { Card, CardContent, } from "@/app/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import React, { useState } from "react"
type ServiceType = "wash-and-iron" | "wash-only" | "iron-only"


interface PricingItem {
  name: string
price: string
process:string

}

const press: PricingItem[] = [
  { name: "Shalwar Suite", price:"80",process:"Iron", },
  { name: "Formal Shirt",  price:"40",process:"Iron", },
  { name: "T-shirt / Polo", price:"50",process:"Steam Iron", },
  { name: "Pant",  price:"40",process:"Iron", },
  { name: "Dressing Pant",  price:"50",process:"Steam Iron", },
  { name: "Trouser / Short",  price:"40",process:"Steam Iron", },
  { name: "Coat / Blazer", price:"350",process:"Steam Iron", },
  { name: "Coat Suit (2 piece)",  price:"400",process:"Steam Iron", },
  { name: "Coat Suit (3 piece)",  price:"500",process:"Steam Iron", },
  { name: "Waistcoat", price:"200",process:"Steam Iron", },
  { name: "Hoodie",  price:"120" ,process:"Steam Iron",},
  { name: "Sweater",  price:"200",process:"Steam Iron",},
  { name: "Jacket",  price:"250" ,process:"Steam Iron",},
  { name: "Ladies Suite (2 pcs)",  price:"80" ,process:"Iron",},
  { name: "Ladies Suite (3 pcs)",  price:"120" ,process:"Iron",},
  { name: "Ladies Fancy (1 piece)",  price:"From 200" ,process:"Steam Iron",},
  { name: "Abaya",  price:"150" ,process:"Steam Iron",},
  { name: "Shawl",  price:"100" ,process:"Steam Iron",},
  { name: "Bed Sheet",  price:"150" ,process:"Iron",},
  { name: "Pillow cover",  price:"30" ,process:"Iron",},
  { name: "Chandni",  price:"From 200" ,process:"Iron",},
  { name: "Curtain",  price:"From 200" ,process:"Steam Iron",},

]

const wash_and_Iron:PricingItem[]=[
  { name: "Shalwar Suite", price:"150",process:"Wash + Iron", },
  { name: "Formal Shirt",  price:"100",process:"Wash + Iron", },
  { name: "T-shirt / Polo", price:"80",process:"wash + Steam Iron", },
  { name: "Innerwear", price:"50",process:"Wash + Iron", },
  { name: "Pant",  price:"100",process:"Wash + Iron", },
  { name: "Dressing Pant",  price:"120",process:"Dry Clean + Steam Iron", },
  { name: "Trouser / Short",  price:"80",process:"Wash + Steam Iron", },
  { name: "Coat / Blazer", price:"500",process:"Dry Clean + Steam Iron", },
  { name: "Coat Suit (2 piece)",  price:"600",process:"Dry Clean + Steam Iron", },
  { name: "Coat Suit (3 piece)",  price:"750",process:"Dry Clean + Steam Iron", },
  { name: "Waistcoat", price:"300",process:"Dry Clean + Steam Iron", },
  { name: "Hoodie",  price:"200" ,process:"Wash + Steam Iron",},
  { name: "Sweater",  price:"300",process:"Dry Clean + Steam Iron",},
  { name: "Jacket",  price:"350" ,process:"Wash + Steam Iron",},
  { name: "Ladies Suite (2 pcs)",  price:"150" ,process:"Wash + Iron",},
  { name: "Ladies Suite (3 pcs)",  price:"220" ,process:"Wash + Iron",},
  { name: "Ladies Fancy (1 piece)",  price:"From 300" ,process:"Dry Clean + Steam Iron",},
  { name: "Abaya",  price:"250" ,process:"Wash + Steam Iron",},
  { name: "Shawl",  price:"250" ,process:"Dry Clean + Steam Iron",},
  { name: "Bed Sheet",  price:"250" ,process:"Wash + Iron",},
  { name: "Pillow cover",  price:"50" ,process:"Wash + Iron",},
  { name: "Chandni",  price:"From 400" ,process:"Wash + Iron",},
  { name: "Curtain",  price:"From 400" ,process:"Dry Clean + Steam Iron",},
]

const wash:PricingItem[]=[
  { name: "Shalwar Suite", price:"100",process:"Wash", },
  { name: "Formal Shirt",  price:"60",process:"Wash", },
  { name: "T-shirt / Polo", price:"60",process:"wash", },
  { name: "Innerwear", price:"40",process:"Wash", },
  { name: "Pant",  price:"60",process:"Wash", },
  { name: "Dressing Pant",  price:"70",process:"Dry Clean", },
  { name: "Trouser / Short",  price:"50",process:"Wash", },
  { name: "Coat / Blazer", price:"300",process:"Dry Clean", },
  { name: "Coat Suit (2 piece)",  price:"370",process:"Dry Clean", },
  { name: "Coat Suit (3 piece)",  price:"430",process:"Dry Clean", },
  { name: "Waistcoat", price:"180",process:"Dry Clean", },
  { name: "Hoodie",  price:"100" ,process:"Wash",},
  { name: "Sweater",  price:"150",process:"Dry Clean",},
  { name: "Jacket",  price:"200" ,process:"Wash",},
  { name: "Leather Jacket",  price:"1000" ,process:"Polish",},
  { name: "Ladies Suite (2 pcs)",  price:"80" ,process:"Wash",},
  { name: "Ladies Suite (3 pcs)",  price:"120" ,process:"Wash",},
  { name: "Ladies Fancy (1 piece)",  price:"From 150" ,process:"Dry Clean",},
  { name: "Abaya",  price:"130" ,process:"Wash",},
  { name: "Shawl",  price:"130" ,process:"Dry Clean",},
  { name: "Bed Sheet",  price:"130" ,process:"Wash",},
  { name: "Pillow cover",  price:"30" ,process:"Wash",},
  { name: "Chandni",  price:"From 200" ,process:"Wash",},
  { name: "Curtain",  price:"From 200" ,process:"Dry Clean",},
  { name: "Blanket",  price:"600" ,process:"Dry Clean",},
  { name: "Comforter",  price:"500" ,process:"Wash",},
  { name: "Darri",  price:"From 300" ,process:"Wash",},
  { name: "Ja-e-Namaz",  price:"FREE" ,process:"Wash",},
  { name: "Center Piece",  price:"From 300" ,process:"Wash",},
  { name: "Paidan",  price:"100" ,process:"Wash",},
  { name: "Carpet",  price:"per sq ft 20" ,process:"Wash",},
]

export default function PricingPage() {
  const [activeService, setActiveService] = useState<ServiceType>("wash-and-iron")
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
     <section className="sm:py-20 py-10  bg-gradient-to-b from-blue-100 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold py-2 tracking-tighter sm:mb-6 mb-2 bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-blue-800">Our Pricing</h1>
            <p className="sm:text-xl text-lg text-muted-foreground mb-8">
              Transparent pricing for all your laundry needs. Quality service at competitive rates.
            </p>
          </div>
        </div>
      </section>
  {/* Service Type Filter */}
  <Tabs
          value={activeService}
          onValueChange={(value) => setActiveService(value as ServiceType)}
          className="w-full justify-center"
        >
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="wash-and-iron">Wash & Iron</TabsTrigger>
            <TabsTrigger value="wash-only">Wash Only</TabsTrigger>
            <TabsTrigger value="iron-only">Iron Only</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Pricing Table */}
        <Card>
          
          <CardContent className=" p-4 rounded bg-gradient-to-tl from-blue-200 to-gray-50 ">
            <div className="flex justify-between mb-4">
            <div className="font-semibold sm:text-2xl text-xl bg-clip-text text-transparent bg-gradient-to-b from-gray-600 to-gray-900">Item</div>
            <div className="font-semibold sm:text-2xl text-xl bg-clip-text text-transparent bg-gradient-to-b from-gray-600 to-gray-900">Service</div>
            <div className="font-semibold sm:text-2xl text-xl bg-clip-text text-transparent bg-gradient-to-b from-gray-600 to-gray-900">Price</div>
            </div>
            <div className="grid grid-cols-3 gap-4  ">
              
           {
          activeService==="iron-only"&& press.map((item) => (
              <React.Fragment key={item.name}>
                <div className="font-sans text-left text-sm sm:text-base">{item.name}</div>
                <div className="text-muted-foreground text-center text-sm sm:text-base">{
              
             (item.process)}</div>
                <div className="text-right text-sm sm:text-base">
                {item.price}
                </div>
              </React.Fragment>
            ))}
               {activeService==="wash-only"&& wash.map((item) => (
              <React.Fragment key={item.name}>
                <div className="font-sans text-left text-sm sm:text-base">{item.name}</div>
                <div className="text-muted-foreground text-center text-sm sm:text-base">{
              
             (item.process)}</div>
                <div className="text-right text-sm sm:text-base">
                {item.price}
                </div>
              </React.Fragment>
            ))}
               {activeService==="wash-and-iron"&& wash_and_Iron.map((item) => (
              <React.Fragment key={item.name}>
                <div className="font-sans text-left text-sm sm:text-base">{item.name}</div>
                <div className="text-muted-foreground text-center text-sm sm:text-base">{
              
             (item.process)}</div>
                <div className="text-right text-sm sm:text-base">
                {item.price}
                </div>
              </React.Fragment>
            ))}
          
           
              
           
            </div>
          </CardContent>
        </Card>
      {/* Additional Information */}
      <section className="py-20 bg-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">Additional Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-gray-600 to-gray-900">Minimum Order</h3>
                <p className="text-muted-foreground">
                The minimum order amount for our Wash & Fold service is Rs 1000/-
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-gray-600 to-gray-900">Turnaround Time</h3>
                <p className="text-muted-foreground">
                  Standard turnaround time is 72 hours. We offer a 24-hour express service for an additional 100% of the
                  total order cost.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-gray-600 to-gray-900">Special Items</h3>
                <p className="text-muted-foreground">
                  Prices for special items such as wedding dresses, leather goods, or large comforters may vary. Please
                  contact us for a quote.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-gray-600 to-gray-900">Pickup and Delivery</h3>
                <p className="text-muted-foreground">
                  We offer free pickup and delivery for orders over Rs 1000/-. For orders under Rs 1000/-, a specific amount of delivery fee will be
                  applied.depending on location
                </p>
              </div>
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

