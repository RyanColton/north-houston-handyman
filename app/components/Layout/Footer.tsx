import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-themeDarkBlue">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-medium text-lg">North Houston Handyman</h3>
            <p className="mt-4 text-neutral-400 text-sm sm:text-base">
              North Houston Handyman is licensed and insured in Texas.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left col-span-1 sm:col-span-2 md:col-span-1">
            <h3 className="text-white font-medium text-lg">Contact</h3>
            <ul className="mt-4 space-y-2 text-neutral-400 text-sm sm:text-base">
              <li><Link href="/contact">Email: northhoustonhandyman1@gmail.com</Link></li>
              <li><Link href="tel:+13464597777">Phone: (346) 459-7777</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
} 