import Button from '../UILibrary/Button'
import FadeIn from '../UILibrary/FadeIn'

const blobUrl = process.env.BLOB_BASE_URL

export function Hero() {
  return (
    <section className="relative bg-neutral-50 px-4 py-8 sm:p-20 w-full flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <FadeIn delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
              <p className="mx-auto text-md sm:text-base md:text-xl lg:text-xl text-neutral-500 max-w-prose">
                Trusted general contractor serving Harris and Montgomery counties with expert home repairs, fencing, remodeling, and more. No job too big or small—built to last, done right the first time. Contact Gary today for a free estimate!
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
} 