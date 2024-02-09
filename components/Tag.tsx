import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-medium uppercase text-[#fab915] hover:text-[#fab9156b] dark:hover:text-[#fab915]"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
