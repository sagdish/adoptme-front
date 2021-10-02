import { useState } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import PetItem from '@/components/PetItem'
import { API_URL } from '../config/index'

export default function HomePage({data}) {
  const [ lang, setLang ] = useState('rus');

  return (
    <Layout>
      <h1>{lang === 'rus' ? 'Потерявшиеся Питомцы' : 'Missing Pets'}</h1>
      {data.length === 0 && <h3>{lang === 'rus' ? 'Потеряшек нет на данный момент, ура!' : 'No Missing Pets - Hooray! or Not listed on this Platform'}</h3>}

      {data.map(pet => (
        <PetItem key={pet.id} pet={pet} />
      ))}

      {data.length > 0 && (
        <Link href='/missing'>
          <a className='btn-secondary'>View All</a>
        </Link>
      )}
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/pets`)
  const data = await res.json()

  return {
    props: {
      data: data.slice(0, 3)
    }
  }
}
