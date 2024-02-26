import { ArrowTrendingUpIcon, BanknotesIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'

const benefits = [
  {
    name: 'Authenticity',
    description:
      'We prioritize real people over bots, ensuring genuine interactions and job opportunities. We personally verify 100% of freelancers and clients. Depite that being time consuming, we know it provides a better experience for our users',
    icon: FingerPrintIcon,
  },
  {
    name: 'Fair Pricing',
    description:
      'No inflated costs here; our platform provides fair and transparent pricing for all users by removing the low-skill undercutting jobs.',
    icon: BanknotesIcon,
  },
  {
    name: 'Simplified Experience',
    description:
      'Say goodbye to the spammy clutter and confusion of saturated platforms; we offer a straightforward, reliable service.',
    icon: ArrowTrendingUpIcon,
  },
  {
    name: 'Trust and Reliability',
    description:
      'Count on us for a dependable freelancing experience, free from the frustrations of traditional platforms.',
    icon: LockClosedIcon,
  },
]

export default function CTA() {
  return (
    <div className="mt-20 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#BE8803] ">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            An unorthodox approach to freelancing
          </p>
          
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#BE8803] ">
                    <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {benefit.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{benefit.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
