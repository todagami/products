import { useRouter } from 'next/router'

const articles = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p>articles: {slug}</p>
}

export default articles