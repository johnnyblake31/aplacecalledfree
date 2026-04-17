import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Place Called Free",
  description:
    "Supporting men currently or formerly impacted by incarceration through mental, emotional, and spiritual wellness programming. Based in Boston.",
};

function Header() {
  return (
    <header className="bg-forest text-cream">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          A Place Called Free
        </Link>
        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          <li>
            <Link
              href="/"
              className="transition-colors hover:text-sage-light"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="transition-colors hover:text-sage-light"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/programs"
              className="transition-colors hover:text-sage-light"
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="transition-colors hover:text-sage-light"
            >
              Contact
            </Link>
          </li>
        </ul>
        <MobileMenu />
      </nav>
    </header>
  );
}

function MobileMenu() {
  return (
    <details className="group relative md:hidden">
      <summary className="flex cursor-pointer items-center gap-1 list-none text-sm font-medium">
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            className="group-open:hidden"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
          <path
            className="hidden group-open:block"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </summary>
      <ul className="absolute right-0 top-full mt-2 w-48 rounded-lg bg-forest-dark p-4 text-sm font-medium shadow-lg">
        <li>
          <Link href="/" className="block py-2 hover:text-sage-light">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="block py-2 hover:text-sage-light">
            About
          </Link>
        </li>
        <li>
          <Link href="/programs" className="block py-2 hover:text-sage-light">
            Programs
          </Link>
        </li>
        <li>
          <Link href="/contact" className="block py-2 hover:text-sage-light">
            Contact
          </Link>
        </li>
      </ul>
    </details>
  );
}

function Footer() {
  return (
    <footer className="bg-forest-dark text-cream/80">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-cream">
              A Place Called Free
            </h3>
            <p className="text-sm leading-relaxed">
              Freedom is not only about release from prison, but liberation of
              the mind, spirit, and body.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-cream">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-cream">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cream">
                  About
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-cream">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cream">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-cream">Get in Touch</h4>
            <p className="text-sm">
              <a
                href="mailto:ramondurham2@gmail.com"
                className="hover:text-cream"
              >
                ramondurham2@gmail.com
              </a>
            </p>
            <p className="mt-2 text-sm">Boston, MA</p>
          </div>
        </div>
        <div className="mt-10 border-t border-cream/20 pt-6 text-center text-xs">
          &copy; {new Date().getFullYear()} A Place Called Free. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
