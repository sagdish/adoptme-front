import Link from 'next/link'
import styles from '@/styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>Adopt Uz</a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href='/missing'>
              <a>Missing Pets</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
