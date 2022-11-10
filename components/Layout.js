import Head from "next/head"
import {useRouter} from 'next/router'
import styles from "@/styles/Layout.module.css"
import Header from "./Header"
import Footer from "./Footer"
import Showcase from "./Showcase"

export default function Layout({title, keywords, description, children}) {
  
    const router = useRouter()
    // <!--if path name is '/'' then && show showcase-->
    return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='desciption' content={description}/>
            <meta name='keywords' content={keywords} />
        </Head>
        
        <Header />
        
        {router.pathname === '/ ' && <Showcase/>} 
            <div className={styles.container}>
                {children}
            </div>
        <Footer/>
    </div>

  )
}

Layout.defaultProps = {
    title: 'DJ Events - Find the best parties',
    description: 'Find the latest musical events',
    keywords: 'music, dj, edm, events',
}
