import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Logo from '@/data/logo.svg'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="flex justify-center px-6 py-2 text-center align-middle md:px-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
          <div className="flex w-[100%] justify-center align-middle">
            <div className="mb-12 md:mt-12 lg:mb-0 lg:mt-0">
              <div className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                <h1 className="mb-16 mt-2 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
                  Freely. <br />
                  <span className="text-primary">
                    freelancing, simplified.
                    <br />
                    <span className="text-sm">
                      Dive in, connect, and educate yourself on the art of freelancing.
                    </span>
                  </span>
                </h1>
                <span className="flex justify-around">
                  <a
                    className="hover:bg-primary light:text-black mb-2 inline-block rounded bg-primary-600 px-12 pb-3.5 pt-4 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mb-0 md:mr-2"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    href="#!"
                    role="button"
                  >
                    Get started
                  </a>
                  <a
                    className="text-primary inline-block rounded px-12 pb-3.5 pt-4 text-sm font-medium uppercase leading-normal outline-1 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    href="#!"
                    role="button"
                  >
                    Learn more
                  </a>
                </span>
              </div>
            </div>
            <div className="md:mb-12 lg:mb-0"></div>
          </div>
        </div>
      </div>

      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
