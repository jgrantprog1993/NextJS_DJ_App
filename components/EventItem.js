import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/EventItem.module.css'

export default function EventItem({evt}) {
  
    return (
    <div className={styles.event}>
        <div className={styles.img}>
        <Image 
        src ={evt.attributes.image ? 
            evt.attributes.image.data.attributes.formats.thumbnail.url       //https://stackoverflow.com/questions/70506535/image-url-not-showing-on-api-call-strapi-v4-in-single-collection-type
            : `/images/showcase.jpg`} 
        width={170}
        height={100}
        />
        </div>

        <div className={styles.info}>
            <span>
                {evt.attributes.date} at {evt.attributes.time}
            </span>
            <h3>{evt.attributes.name}</h3>
        </div>
        <div className={styles.link}>
            <Link legacyBehavior href={`/events/${evt.attributes.slug}`}>
                <a className='btn'>Details</a>
            </Link>

        </div>
    </div>
  )
}
