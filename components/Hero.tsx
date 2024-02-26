import Image from 'next/image'
import colorful from 'public/freelancer.jpg'
import Banner from './Banner'

export default function Hero() {
  const title = `A Place For Freelancers`
  const description = 'Hire. Network. Learn.'
  const longdesc =
    'Read expert insights, contribute articles, explore job opportunities on our job board, and show your support with our exclusive merchandise. Join us in shaping the future of freelancing'
  const callToAction1Text = 'Get started'
  const callToAction1Url = '/'
  const callToAction2Text = 'Learn to freelance'
  const callToAction2Url = '/'
  const hireFreelancersUrl = '/'
  const findFreelancingJobsUrl = '/'
  const findDiscountsUrl = '/'

  const parts = title.split(':')

  return (
    <>
      <div
        className="z-999 relative mt-0 overflow-hidden bg-cover bg-no-repeat py-40 pb-8 pt-0"
        style={{ backgroundImage: `url(${colorful})` }}
      >
        <Banner />

        <div className="mx-auto max-w-7xl p-10 px-6 lg:px-8">
          <div className="flex flex-col-reverse items-center justify-between lg:flex-row lg:gap-x-16">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                <span>{parts[0]}</span>: <span>{parts[1]}</span>
              </h1>
              {description && (
                <p className="text-md mt-2 p-2 leading-8 dark:text-gray-200">{description}</p>
              )}
              <div className="flex items-center gap-6">
                {callToAction1Url && (
                  <a
                    href={callToAction1Url}
                    className="rounded-md border-[3px] border-solid border-[#BE8803] bg-[#be8803] p-2 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#BE8803]/80 focus-visible:outline focus-visible:outline-2    focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-white dark:bg-[#BE8803]"
                  >
                    {callToAction1Text}
                  </a>
                )}
                {callToAction2Url && (
                  <a
                    href={callToAction2Url}
                    className="text-sm font-semibold leading-6 text-[#BE8803] hover:text-black
                    dark:hover:text-white
                    "
                  >
                    {callToAction2Text} <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </div>
            <div className="hidden lg:flex">
              <Image
                src={colorful}
                alt={title}
                className="rounded-2xl border-[3px] border-solid border-[#BE8803] object-cover dark:border-white"
                width={1280}
                height={853}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Buttons
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a
            href={hireFreelancersUrl}
            className="rounded-lg bg-[#BE8803] px-6 py-3 font-semibold text-white hover:bg-[#f5a623]"
          >
            Hire Freelancers
          </a>
          <a
            href={findFreelancingJobsUrl}
            className="rounded-lg bg-[#BE8803] px-6 py-3 font-semibold text-white hover:bg-[#f5a623]"
          >
            Find Freelance Clients
          </a>
          <a
            href={findDiscountsUrl}
            className="rounded-lg bg-[#BE8803] px-6 py-3 font-semibold text-white hover:bg-[#f5a623]"
          >
            Learn To Freelance
          </a>
        </div>
      </div> */}
    </>
  )
}
