import Image from "next/image"
import { Check } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Wash & Fold",
      description: "Professional washing, drying, and folding service for your everyday laundry",
      features: [
        "Sorting by color and fabric type",
        "Temperature-appropriate washing",
        "Professional folding",
      ],
      image: "/wash.jpg",
    },
    {
      title: "Dry Cleaning",
      description: "Expert dry cleaning service for your delicate and special garments",
      features: ["Stain removal", "Pressing and finishing", "Special fabric care", "Eco-friendly cleaning"],
      image: "/dryclean.jpg",
    },
    {
      title: "Ironing Service",
      description: "Professional pressing service to keep your clothes crisp and wrinkle-free",
      features: [
        "Temperature-controlled pressing",
        "Fabric-specific treatment",
        "Next-day delivery available",
      ],
      image: "/iron.jpg",
    },
    {
      title: "Specialty Items",
      description: "Specialized cleaning for your valuable and delicate items",
      features: [
        "Wedding dress preservation",
        "Curtain cleaning",
        "Blanket and duvet cleaning",
        "Leather and suede care",
      ],
      image: "/wedding-dress.svg",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen ">
      {/* Hero Section */}
      <section className="sm:py-20 py-10  bg-gradient-to-b from-blue-100 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter sm:mb-6 mb-2 bg-clip-text text-transparent bg-gradient-to-b from-blue-500 py-2  to-blue-800">Our Services</h1>
            <p className="sm:text-xl text-lg text-muted-foreground">Professional laundry solutions tailored to your needs</p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 ">
        <div className="container">
          <div className="grid md:gap-20 gap-28">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid md:grid-cols-2 md:gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-blue-600" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
               
                </div>
                <div className="relative h-[300px]">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="md:py-20 py-14 bg-blue-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center md:mb-12 mb-14 bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">How It Works</h2>
          <div className="grid md:grid-cols-4 md:gap-8 gap-y-16">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-800 ">Schedule Pickup</h3>
              <p className="text-muted-foreground">Book your pickup time via Whatsapp or phone call</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-800 ">We Collect</h3>
              <p className="text-muted-foreground">Our team picks up your items from your doorstep</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-800 ">We Clean</h3>
              <p className="text-muted-foreground">Your items are professionally cleaned</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-600 to-gray-800 ">We Deliver</h3>
              <p className="text-muted-foreground">Clean items delivered to your doorstep</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

