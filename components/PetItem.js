import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/PetItem.module.css'

export default function PetItem({pet}) {
  console.log(pet.photos)
  return (
    <div className={styles.pet}>

      <div className={styles.img}>
        <Image src={pet.photos? pet.photos[0].formats.thumbnail.url : '/images/dog_sample.png'} 
          width={170} height={100}
        />
      </div>

      <div className={styles.info}>
        <span>
          {new Date(pet.created_at).toLocaleDateString('ru-RU')}
        </span>
        <h3>{pet.name}</h3>
      </div>

      <div className={styles.link}>
        <Link href={`/pets/${pet.slug}`}>
          <a className='btn'>Details</a>
        </Link>
      </div>

    </div>
  )
}
