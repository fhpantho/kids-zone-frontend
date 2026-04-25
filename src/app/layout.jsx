import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import localFont from "next/font/local";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});

export const mayaboti = localFont({
  src: "./../fonts/mayaboti-normal.ttf",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://kidzzone.vercel.app"),

  title: {
    default: "KidzZone - Fun Learning & Kids Entertainment Platform",
    template: "%s | KidzZone",
  },

  description:
    "KidzzZone is a fun and interactive platform for kids featuring educational content, games, and engaging activities to enhance creativity and learning.",

  keywords: [
    "kids learning",
    "children education",
    "kids games",
    "fun learning platform",
    "kids entertainment",
    "interactive learning",
    "online kids platform",
  ],

  authors: [{ name: "KidzzZone Team" }],
  creator: "KidzzZone",
  publisher: "KidzzZone",

  openGraph: {
    title: "KidzzZone - Fun Learning & Kids Platform",
    description:
      "Explore fun, educational, and interactive content for kids. Learn, play, and grow with KidzzZone.",
    url: "https://kidzzone.vercel.app",
    siteName: "KidzzZone",
    images: [
      {
        url: "https://i.ibb.co.com/sd12L8nj",
        width: 1200,
        height: 630,
        alt: "KidzzZone Landing Preview",
      },
      {
        url: "https://i.ibb.co.com/vx8wvZ3n",
        width: 1200,
        height: 630,
        alt: "KidzzZone Features",
      },
      {
        url: "https://i.ibb.co.com/WW0NjJF4",
        width: 1200,
        height: 630,
        alt: "KidzzZone UI Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "KidzzZone - Kids Learning Platform",
    description:
      "A fun and interactive learning platform for kids with games and educational content.",
    images: ["https://i.ibb.co.com/sd12L8nj"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/assets/logo.png",
  },

  manifest: "/site.webmanifest",

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },

  alternates: {
    canonical: "https://kidzzone.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased `}>
        <header className="py-2 md:w-11/12 mx-auto">
          {/* <Navbar /> */}
          <Navbar />
        </header>

        <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100svh-302px)]">
          {children}
        </main>

        <footer>
          {/* <footer /> */}

          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
