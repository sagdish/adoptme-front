import {FaExclamationTriangle} from 'react-icons/fa'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/404.module.css'

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Fount'>
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Soryan brat ili sistra, netu da takoy stranica</h4>
        <Link href='/'>Айда домой</Link>
      </div>
    </Layout>
  )
}
