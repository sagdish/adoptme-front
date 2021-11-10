import Link from 'next/link'
import styles from '@/styles/Header.module.css'
import Search from './Search'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>Adopt Uz</a>
        </Link>
      </div>

      <Search />
      
      <nav>
        <ul>
          <li>
            <Link href='/pets'>
              <a>Missing Pets</a>
            </Link>
          </li>
          <li>
            <Link href='/pets/add'>
              <a>Add Pet</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
