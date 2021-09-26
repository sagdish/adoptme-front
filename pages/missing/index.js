import Link from 'next/link'
import Layout from '@/components/Layout'
import PetItem from '@/components/PetItem'
import { API_URL } from '@/config/index'

export default function MissingPetsPage({data}) {
  console.log(data)
  return (
    <Layout>
      <h1>Missing Pets</h1>
      {data.length === 0 && <h3>No Missing Pets - Hooray! or Not listed on this Platform</h3>}

      {data.map(pet => (
        <PetItem key={pet.id} pet={pet} />
      ))}
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/pets`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}
