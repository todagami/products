import { useRouter } from 'next/router'

const products = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p>products: {slug}</p>
}

export default products;