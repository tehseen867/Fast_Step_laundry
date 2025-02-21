import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Link from "next/link";
import Script from 'next/script';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fast Step Laundry Service | Professional Laundry Service in Karachi",
  description: "Professional laundry service at your doorstep. Fast, reliable, and affordable dry cleaning and washing services.",
};

const whatsappUrl =
  "https://wa.me/923324189074?text=Hello%20Fast%20Step%20Laundry!%20%20I%20am%20interested%20in%20your%20services.%20Can%20we%20discuss%20further?";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* ✅ SEO Meta Tags */}
        <meta name="description" content="Professional laundry service at your doorstep. Fast, reliable, and affordable dry cleaning and washing services." />
dry cleaning
        <meta name="keywords" content="laundry service, dry cleaning, washing service, doorstep laundry, professional laundry, Fast Step Laundry ,iron clothes , dry clean near me, dry cleaners near me, online dry cleaner laundry service,
washing service,
doorstep laundry,
professional laundry,
Fast Step Laundry,
iron clothes,
dry clean near me,
dry cleaners near me,
online dry cleaner
laundry pickup and delivery,
wash and fold,
laundry delivery service,
commercial laundry service,
shoe cleaning service,
laundry service from home,
drop-off laundry service,
same day laundry service,
laundry services for hotels,
pickup laundry service,
laundry service cost,
laundry coupons,
professional laundry service,
local laundry service,
laundry service pricing,
commercial dry cleaning,
personal laundry service,
uniform laundry service,
laundry cleaning products,
express laundry service,
fluff and fold service,
stain removal service,
laundry service advertising,
affordable laundry service,
laundry subscription service,
laundry service reviews,
bed linen laundry service,
laundry service near me,
laundry service for business,
quality laundry service,
large item laundry service,
specialty laundry service,
laundry service for students,
laundromat near me,
laundry near me,
laundromat,
coin laundry near me,
24 hour laundromat near me,
launderette near me,
coin laundry,
wash and fold near me,
24 hour laundromat,
laundry shop near me,
launderette,
dobi near me,
nearest laundromat,
24 hour laundry near me,
self service laundry near me,
ironing service near me,
closest laundromat,
drop off laundry near me,
closest laundromat to me,
laundry shop,
find a laundromat near me,
24 hr laundry near me,
24 hour laundry,
eco-friendly laundry service,
laundry concierge services,
commercial laundry services,
laundry for hotels,
laundry app,
laundry pickup service,
laundry home delivery,
best laundry service,
cheap laundry service,
laundry cleaning,
laundry and dry cleaning,
laundry solutions,
laundry experts,
laundry care,
laundry assistance,
laundry help,
laundry support,
laundry management,
laundry professionals,
laundry specialists,
laundry solutions near me,
laundry pickup,
laundry delivery,
laundry drop off,
laundry collection,
laundry return,
laundry pickup and delivery near me,
laundry pickup service near me" />
        <meta name="author" content="Fast Step Laundry" />

        {/* ✅ Open Graph Meta Tags (For Social Media Sharing) */}
        <meta property="og:title" content="Fast Step Laundry Service" />
        <meta property="og:description" content="Professional laundry service at your doorstep. Fast, reliable, and affordable dry cleaning and washing services." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://faststeplaundry.online" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fast Step Laundry Service" />
        <meta name="twitter:description" content="Professional laundry service at your doorstep." />
        <meta name="twitter:image" content="/logo.png" />

        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://faststeplaundry.online" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
          <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-WLBG1JM847`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WLBG1JM847', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-x-1 bg-green-600 text-white w-48 h-10 rounded-full fixed bottom-8 right-10 shadow-lg hover:bg-green-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M12.002 2c-5.524 0-10 4.478-10 10 0 1.774.464 3.507 1.346 5.026L2 22l5.131-1.34C8.633 21.534 10.315 22 12.002 22c5.524 0 10-4.478 10-10s-4.476-10-10-10m5.14 14.029c-.216.61-1.067 1.107-1.757 1.277-.474.12-1.084.217-3.142-.67-2.642-1.088-4.342-3.748-4.47-3.92-.127-.173-1.07-1.426-1.07-2.722s.679-1.931.92-2.19c.24-.26.52-.325.693-.325.174 0 .346.002.497.009.16.006.374-.06.586.448.216.522.734 1.806.8 1.938.064.13.106.283.02.455-.086.173-.13.283-.26.435-.13.15-.273.34-.39.457-.13.12-.267.253-.116.506.147.253.654 1.08 1.41 1.748.97.85 1.787 1.112 2.04 1.237.253.127.4.11.55-.066.147-.173.635-.73.803-.982.173-.253.347-.22.586-.127.24.087 1.516.714 1.773.845.26.13.432.195.497.305.064.11.064.637-.151 1.247"/>
            </svg>
            Chat on WhatsApp
          </Link>
        </main>
        <Footer />
      </body>
    </html>
  );
}
