import Link from "next/link"
import { CircleDollarSign } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-gray-200">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <CircleDollarSign className="h-5 w-5 text-emerald-600" />
            <Link
              href="/"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
            >
              Spout
            </Link>
          </div>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm font-semibold text-gray-600 hover:text-gray-900"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold text-gray-600 hover:text-gray-900"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold text-gray-600 hover:text-gray-900"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-semibold text-gray-500">
              &copy; {new Date().getFullYear()} Spout Finance. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://twitter.com/spoutfinance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/spoutfinance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
