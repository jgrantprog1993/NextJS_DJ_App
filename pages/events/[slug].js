import {useRouter} from 'next/router'
import Layout from '@/components/Layout'
import { API_URL } from 'config'
import styles from '@/styles/Event.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {FaPencilAlt, FaTimes} from 'react-icons/fa'

export default function EventPage({evt}) {
    //const router = useRouter()
    //console.log(evt)
    const deleteEvent = (e)=> {
      console.log("Delete Event")
    }
 
  return (
    <Layout>
       <div className={styles.event}>
        <div className={styles.controls}>
          <Link legacyBehavior href={`/events/edit/${evt.id}`}>
            <a><FaPencilAlt/> Edit Event</a>
          </Link>
          <a href='#' className={styles.delete}
          onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>
        <span>
          {evt.attributes.date} at {evt.attributes.time}
        </span>
        <h1>{evt.attributes.name}</h1>
        {evt.attributes.image && (
          <div className={styles.image}>
            <Image src={evt.attributes.image.data.attributes.formats.medium.url} 
            width={600}
            height={400} />
          </div>
        )}
        <h3> Performers: </h3>
        <p>{evt.attributes.performers}</p>
        <h3>Description:</h3>
        <p>{evt.attributes.description}</p>
        <h3>Venue: {evt.attributes.venue}</h3>
        <p>{evt.attributes.address}</p>

        <Link legacyBehavior href='/events'>
          <a className={styles.back}> {'<'}Go Back </a>
        </Link>
       </div>
    </Layout>
  )
}


// export async function getStaticPaths(){
//   const res = await fetch(`${API_URL}/events`)
//   const events = await res.json()
//   //const eventsdata = events.data
//   console.log(events)
//   const paths = events.map((evt)=> ({
//     params: {slug: evt.slug}
//   }))

//   return {
//     paths,
//     fallback: true,
//   }
// }

// export async function getStaticProps({params: {slug}}){

//   const res = await fetch(`${API_URL}/events?slug=${slug}&populate=*`)
//   const events = await res.json()
//   console.log(events)
//   const eventsdata = events.data

//   return {
//     props: {
//       evt:  eventsdata[0],
//     },
//     revalidate: 1
//   }
// }
export async function getServerSideProps({params: {slug}}){

  const res = await fetch(`${API_URL}/api/events?slug=${slug}&populate=*`)
  const events = await res.json()
  const eventsdata = events.data
  console.log(eventsdata)

  return{
    props: {
      evt: eventsdata[0],
    },
  }
}