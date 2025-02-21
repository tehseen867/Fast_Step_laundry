"use client"; // Required for handling form submission in Next.js App Router

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
  
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (data.success) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
      } else {
        throw new Error(data.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("An error occurred while sending your message.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="sm:py-20 py-10 bg-gradient-to-b from-blue-100 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter sm:mb-6 mb-2 bg-clip-text text-transparent bg-gradient-to-b from-blue-500 py-2  to-blue-800">
              Contact Us
            </h1>
            <p className="sm:text-xl text-lg  text-muted-foreground">Get in touch with our team for any questions or support</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 md:gap-12 gap-y-20">
            <div>
              <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">
                Get in Touch
              </h2>
              <form className="space-y-6" onSubmit={sendEmail}>
                <div>
                  <label htmlFor="name" className="block font-medium">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-3 py-2 border rounded-md"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-medium">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 border rounded-md"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-medium">Phone</label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="Your phone number"
                    className="w-full px-3 py-2 border rounded-md"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-medium">Message</label>
                  <textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="w-full px-3 py-2 border rounded-md min-h-[120px]"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-md" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-t from-gray-500 to-gray-700">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">Near Dow Hospital, Scheme 33, Karachi</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+923324189074</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">fast.step.laundry@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Sunday: 9:00 AM - 9:00 PM
                      <br />
                      Friday: 1:00 PM - 4:00 PM (Off)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 h-[300px] bg-slate-100 rounded-lg overflow-hidden">
              <div className="mt-8 h-[300px] bg-slate-100 rounded-lg overflow-hidden">
              <iframe
    className="w-full h-full border-0"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d67.141794!3d24.950460!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z24.950460°N,67.141794°E!5e0!3m2!1sen!2s!4v1647175270923!5m2!1sen!2s"
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>

</div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
