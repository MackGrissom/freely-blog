import CTA from '@/components/CTA'
import Hero from '@/components/Hero'
import { MacbookScroll } from '@/components/ui/macbook-scroll'

interface Post {
  // Define your post interface here
}

interface Props {
  posts: Post[]
}

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      {' '}
      <Hero />
      <CTA/>
      <MacbookScroll />
      <span className="flex items-center justify-center">
        <button className="rounded-md border-[3px] border-solid border-[#BE8803] bg-[#be8803] p-2 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#BE8803]/80 focus-visible:outline focus-visible:outline-2    focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-white dark:bg-[#BE8803] mt-40">
          Buy now
        </button>
      </span>
    </div>
  )
}

export default Home
