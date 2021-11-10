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
          <Link href={`/pets/edit/${pet.id}`}>
            <a>
              <FaPencilAlt /> Edit Entry
            </a>
          </Link>
          <a href='#' className={styles.delete} onClick={deletePet}>
            <FaTimes /> Delete Entry
          </a>
        </div>

        <span>
          {new Date(pet.created_at).toLocaleDateString('ru-RU')}
        </span>
        <h1>{pet.name}</h1>
        {pet.photos && (
          <div className={styles.image}>
            <Image src={pet.photos.length > 0 ? pet.photos[0].formats.medium.url : '/images/dog_sample.png'} width={960} height={600} />
          </div>
        )}

        <h3>Owners:</h3>
        <p>{pet.owners}</p>
        <h3>Description:</h3>
        <p>{pet.description}</p>
        <h3>Address</h3>
        <p>{pet.address}</p>

        <Link href='/pets'>
          <a className={styles.back}>
            {'<'} Go Back 
          </a>
        </Link>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/pets?slug=${slug}`)
  const pets = await res.json()

  return {
    props: {
      pet: pets[0],
    }
  }
}