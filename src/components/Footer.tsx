import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo / About */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              Aftab Dev
            </h2>

            <p className="mt-3 text-gray-400">
              Full Stack Developer building modern web applications
              with Next.js, React, Node.js and databases.
            </p>
          </div>


          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <div className="space-y-2">

              <Link 
                href="/"
                className="block text-gray-400 hover:text-blue-400"
              >
                Home
              </Link>

              <Link 
                href="/about"
                className="block text-gray-400 hover:text-blue-400"
              >
                About
              </Link>

              <Link 
                href="/projects"
                className="block text-gray-400 hover:text-blue-400"
              >
                Projects
              </Link>

              <Link 
                href="/contact"
                className="block text-gray-400 hover:text-blue-400"
              >
                Contact
              </Link>

            </div>
          </div>


          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Follow Me
            </h3>

            <div className="flex gap-4">

              <a 
                href="#"
                className="px-3 py-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition"
              >
                GitHub
              </a>

              <a 
                href="#"
                className="px-3 py-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition"
              >
                LinkedIn
              </a>

              <a 
                href="#"
                className="px-3 py-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition"
              >
                YouTube
              </a>

            </div>
          </div>

        </div>


        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-5 text-center text-gray-400">

          © {new Date().getFullYear()} Aftab Dev. All rights reserved.

        </div>

      </div>

    </footer>
  );
}