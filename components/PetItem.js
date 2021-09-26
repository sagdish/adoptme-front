import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/PetItem.module.css'

export default function PetItem({pet}) {
  return (
    <div className={styles.pet}>

      <div className={styles.img}>
        <Image src={pet.image? pet.image : '/images/dog_sample.png'} 
          width={170} height={100}
        />
      </div>

      <div className={styles.info}>
        <span>
          {pet.date}
        </span>
        <h3>{pet.name}</h3>
      </div>

      <div className={styles.link}>
        <Link href={`/missing/${pet.slug}`}>
          <a className='btn'>Details</a>
        </Link>
      </div>

    </div>
  )
}
