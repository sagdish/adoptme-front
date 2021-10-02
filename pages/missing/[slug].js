import { FaPencilAlt, FaTimes} from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import styles from '@/styles/Pet.module.css'


export default function MissingPet({ pet }) {
  const deletePet = e => {
    console.log('delete')
  }
 
  return (
    <Layout>
      <div className={styles.pet}>
        <div className={styles.controls}>
          <Link href={`/missing/edit/${pet.id}`}>
            <a>
              <FaPencilAlt /> Edit Entry
            </a>
          </Link>
          <a href='#' className={styles.delete} onClick={deletePet}>
            <FaTimes /> Delete Entry
          </a>
        </div>

        <span>
          {pet.date}
        </span>
        <h1>{pet.name}</h1>
        {pet.image && (
          <div className={styles.image}>
            <Image src={pet.image} width={960} height={600} />
          </div>
        )}

        <h3>Owners:</h3>
        <p>{pet.owners}</p>
        <h3>Description:</h3>
        <p>{pet.description}</p>
        <h3>Address</h3>
        <p>{pet.address}</p>

        <Link href='/missing'>
          <a className={styles.back}>
            {'<'} Go Back 
          </a>
        </Link>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/pets/${slug}`)
  const pets = await res.json()

  return {
    props: {
      pet: pets[0],
    }
  }
}