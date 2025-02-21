
import Link from "next/link"
export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">

      <section className="sm:py-20 py-10 bg-gradient-to-b from-blue-100 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold py-2 tracking-tighter sm:mb-6 mb-2 bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-blue-800">Terms & Conditions</h1>
            <p className="sm:text-xl text-lg text-muted-foreground mb-8">
            Welcome to Fast Step Laundry Service. By using our services, you agree to these terms and conditions.
            </p>
          </div>
        </div>
      </section>

  <section>
  <div className="container mx-auto px-4 py-8">


      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">1. Services</h2>
        <p>
          Fast Step Laundry Service provides laundry and dry cleaning services to customers. We reserve the right to
          refuse service to anyone for any reason at any time.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">2. Pricing and Payment</h2>
        <p>
          Prices for our services are as listed in our store and on our website. We reserve the right to change prices
          at any time. Payment is due at the time of service delivery.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">3. Garment Care</h2>
        <p>
          While we take utmost care in handling your garments, we are not responsible for normal wear and tear,
          including weakened or inherent defects in fabrics. We are not liable for damage to items that are not suitable
          for standard laundry or dry cleaning processes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">4. Customer Responsibilities</h2>
        <p>
          Customers are responsible for checking all pockets and removing any items before submitting clothes for
          laundry. Fast Step Laundry Service is not responsible for damage to or loss of any items left in pockets,
          including money, jewelry, or other valuables.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">5. Minimum Order</h2>
        <p>
          Fast Step Laundry Service requires a minimum order value of Rs 1000/- per service. This minimum order requirement
          helps us maintain operational efficiency and provide high-quality service to all our customers. Orders that do
          not meet the minimum value may be subject to a small order fee or may not be processed until combined with
          additional items to meet the minimum requirement.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">6. Pre-existing Damage</h2>
        <p>
          Our staff will make reasonable efforts to inspect garments for pre-existing damage (tears, burns, etc.) at the
          time of pickup. However, if such damage is not identified at pickup, we will contact the customer before
          proceeding with the cleaning process. Customers are encouraged to inform our staff of any known issues with
          their garments at the time of drop-off or pickup.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">7. Lost or Damaged Items</h2>
        <p>
          In the event of loss or damage to your items, our liability is 50% cost of the
          item. Claims must be made within 1 month of receiving your order.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">8. Turnaround Time</h2>
        <p>
          Standard turnaround time is 72 hours. Rush services may be available at an additional cost. We are not
          responsible for delays due to unforeseen circumstances or events beyond our control.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">9. Unclaimed Items</h2>
        <p>Items left unclaimed for more than 6 months may be donated to charity or disposed of at our discretion.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">10. Privacy</h2>
        <p>We respect your privacy and handle your personal information in accordance with our Privacy Policy.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">11. Modifications</h2>
        <p>
          We reserve the right to modify these terms and conditions at any time. Continued use of our services after any
          changes constitutes acceptance of the new terms.
        </p>
      </section>

      <p className="mt-12">
        By using Fast Step Laundry Service, you acknowledge that you have read, understood, and agree to be bound by
        these terms and conditions. If you have any questions, please {" "}
        <Link href="/contact" className="text-blue-600 hover:underline">
         contact Us
        </Link>
        .
      </p>
    </div>
  </section>
    </div>
  )
}

