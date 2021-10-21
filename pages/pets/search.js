import Link from 'next/link'
import qs from 'qs'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import PetItem from '@/components/PetItem'
import { API_URL } from '@/config/index'

export default function SearchPage({data}) {
  const router = useRouter()
  const {term} = router.query
  return (
    <Layout title='Search Results'>
      <Link href='/pets'>Go Back</Link>
      <h1>{`Search Results for ${term}`}</h1>
      {data.length === 0 && <h3>No match</h3>}

      {data.map(pet => (
        <PetItem key={pet.id} pet={pet} />
      ))}
    </Layout>
  )
}

export async function getServerSideProps({query: {term}}) {
  const query = qs.stringify({
    _where: {
      _or: [
        {name_contains: term},
        {description_contains: term},
        {tags_contains: term},
        {breed_contains: term},
      ]
    }
  })

  const res = await fetch(`${API_URL}/pets?${query}`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}
