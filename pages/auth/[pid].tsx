import { useRouter } from 'next/router'
function auth() {
    const router = useRouter()
  const { pid } = router.query

  return <p>auth: {pid}</p>
};
export default auth;
