"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {

  const [open, setOpen] = useState(false);

  return (
    <div>

      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-lg">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link 
              href="/"
              className="text-2xl font-bold text-blue-400"
            >
              Aftab Dev
            </Link>


            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">

              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>

              <Link href="/about" className="hover:text-blue-400">
                About
              </Link>

              <Link href="/projects" className="hover:text-blue-400">
                Projects
              </Link>

              <Link href="/contact" className="hover:text-blue-400">
                Contact
              </Link>

            </div>


            {/* Button */}
            <Link
              href="/contact"
              className="hidden md:block bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Hire Me
            </Link>


            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-3xl"
            >
              {open ? "✕" : "☰"}
            </button>

          </div>


          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden pb-4 space-y-3">

              <Link 
                href="/"
                className="block hover:text-blue-400"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>

              <Link 
                href="/about"
                className="block hover:text-blue-400"
                onClick={() => setOpen(false)}
              >
                About
              </Link>

              <Link 
                href="/projects"
                className="block hover:text-blue-400"
                onClick={() => setOpen(false)}
              >
                Projects
              </Link>

              <Link 
                href="/contact"
                className="block hover:text-blue-400"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>


              <Link
                href="/contact"
                className="block text-center bg-blue-600 px-5 py-2 rounded-lg"
                onClick={() => setOpen(false)}
              >
                Hire Me
              </Link>

            </div>
          )}

        </div>
      </nav>


      <div className="pt-20 flex justify-center items-center h-screen">
        <h1 className="text-4xl">
          Your Content
        </h1>
      </div>

<Footer />
    </div>
  );
}