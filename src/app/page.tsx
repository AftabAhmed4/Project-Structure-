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


      {/* <div className="pt-20 flex justify-center items-center h-screen">
        <h1 className="text-4xl">
          hero section 
        </h1>
      </div> */}
      <section className="pt-20 min-h-screen flex items-center bg-gray-950 text-white">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid md:grid-cols-2 gap-10 items-center">


      {/* Left Content */}
      <div>

        <p className="text-blue-400 text-lg font-semibold mb-3">
          Welcome to my portfolio
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Hi, I'm 
          <span className="text-blue-500"> Aftab Ahmed</span>
        </h1>


        <h2 className="text-2xl mt-4 text-gray-300">
          Full Stack Web Developer
        </h2>


        <p className="mt-5 text-gray-400 text-lg max-w-xl">
          I build modern, responsive and scalable web applications
          using Next.js, React, Node.js, Express and databases.
        </p>


        {/* Buttons */}
        <div className="flex gap-4 mt-8">

          <button className="
            bg-blue-600 
            hover:bg-blue-700 
            px-6 
            py-3 
            rounded-xl 
            font-semibold
            transition
          ">
            Hire Me
          </button>


          <button className="
            border 
            border-gray-600 
            hover:bg-gray-800
            px-6 
            py-3 
            rounded-xl
            transition
          ">
            View Projects
          </button>

        </div>


      </div>



      {/* Right Image / Card */}
      <div className="flex justify-center">

        <div className="
          w-72 h-72 
          md:w-96 md:h-96
          rounded-full
          bg-gradient-to-r
          from-blue-600
          to-purple-600
          flex
          items-center
          justify-center
          shadow-2xl
        ">

          <div className="
            w-64 h-64
            md:w-80 md:h-80
            rounded-full
            bg-gray-900
            flex
            items-center
            justify-center
          ">

            <h2 className="text-5xl font-bold text-blue-400">
              AA
            </h2>

          </div>

        </div>

      </div>


    </div>

  </div>

</section>

<Footer />
    </div>
  );
}