
import Image from "next/image"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">

      <section className="sm:py-20 py-10 bg-gradient-to-b from-blue-100 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold py-2 tracking-tighter sm:mb-6 mb-2 bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-blue-800">Donate Clothes, Spread Warmth</h1>
            <p className="sm:text-xl text-lg  text-muted-foreground">A small act of kindness can make a big difference.</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
<div className="flex flex-col md:flex-row mb-10 items-center">
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4  bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">Our Mission</h2>
        <p className="text-lg mb-4 ">
          At Fast Step Laundry Service, we believe in the power of community and giving back. Our clothes donation
          initiative is more than just a service; it&apos;s a movement to make a positive impact on the lives of those in
          need.
        </p>
        <p className="text-lg">
          Every piece of clothing you donate goes directly to individuals and families facing hardship, providing them
          with warmth, dignity, and hope.
        </p>
      </section>
      <div className="md:w-[1520px] w-auto mx-auto">
        <Image
          src="/donate-clothes.svg"
          alt="Clothes donation"
          width={1000}
          height={800}
          className="rounded-lg mx-auto object-fill"
        />
      </div>
</div>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4  bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border p-4 rounded-lg bg-gradient-to-b from-blue-200 to-gray-50">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">1. Collect</h3>
            <p>Gather clean, gently used clothes that you no longer need but could benefit others.</p>
          </div>
          <div className="border p-4 rounded-lg bg-gradient-to-b from-blue-200 to-gray-50">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">2. Drop Off</h3>
            <p>You can give your clothes to our rider for donation pickup. just contact us to schedule a pickup.</p>
          </div>
          <div className="border p-4 rounded-lg bg-gradient-to-b from-blue-200 to-gray-50">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">3. We Distribute</h3>
            <p>We sort, clean if necessary, and distribute the clothes to local shelters and families in need.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4  bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">The Impact of Your Donation</h2>
        <p className="text-lg mb-4">
          Since starting this initiative, we&apos;ve been able to help thousands of individuals in our community. Your
          donations have:
        </p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>Provided warm coats to homeless individuals during winter</li>
          <li>Offered comfortable clothing for families in crisis</li>
          <li>Supported disaster relief efforts</li>
        </ul>
        <p className="text-lg">
          Every piece of clothing makes a difference. Together, we&apos;re not just donating clothes; we&apos;re giving people a
          fresh start and renewed hope.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4  bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">What to Donate</h2>
        <p className="text-lg mb-4">We accept all types of clean, gently used clothing for men, women, and children:</p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>Everyday wear: shirts, pants, dresses</li>
          <li>Outerwear: coats, jackets, sweaters</li>
          <li>Professional attire: suits, blazers, dress shirts</li>
          <li>Shoes and accessories</li>
        </ul>
        <p className="text-lg">Please ensure all items are clean, in good condition, and free from tears or stains.</p>
      </section>

      <section className="mb-8 bg-gradient-to-b from-blue-200 to-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4  bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">Ready to Make a Difference?</h2>
        <p className="text-lg mb-4">
        Contact us at Whatsapp! Your unused clothes can change lives. Donate today and make a difference
        </p>
        <Link
            href="https://wa.me/923324189074?text=Hello%20Fast%20Step%20Laundry!%20I%20would%20like%20to%20donate%20clothes.%20Can%20I%20schedule%20a%20pickup?"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-x-1 bg-blue-600 text-white w-48 h-10 rounded  shadow-lg hover:bg-blue-700 transition"
          >
         
            Contact on WhatsApp
          </Link>
      </section>

   

      <section>
        <h2 className="text-2xl font-semibold mb-4  bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">Contact Us</h2>
        <p className="text-lg">
          Have questions about our donation program? We&apos;re here to help! {" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
           contact us
          </Link>{" "}
          or call us at +923324189074.
        </p>
      </section>
    </div>
    </div>
  )
}

