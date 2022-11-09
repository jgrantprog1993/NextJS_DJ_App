import {FaExclamationTriangle} from 'react-icons/fa'
import Layout from '../components/Layout'
import styles from '../styles/404.module.css'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
        <div className={styles.error}>
            <h1><FaExclamationTriangle/>404</h1>
            <h4>This doesn't Exist</h4>
            <Link href='/'>Go Back</Link>
        </div>
    </Layout>
  )
}
