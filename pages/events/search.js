import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import { API_URL } from '@/config/index'
import Link from 'next/link'
import Showcase from '@/components/Showcase'
import qs from 'qs'
import {useRouter} from 'next/router'


export default function SeachPage({eventsdata}) {

    const router = useRouter()
    return (
    <Layout title='Search Results'>
      <Link href='/events'>Go Back</Link>
      <h1>Search results for {router.query.term} </h1>
      {eventsdata.length === 0 && <h3> No Events to show</h3>}
      {eventsdata.map((eventsdata) => (
        <EventItem key={eventsdata.id} evt={eventsdata}/>
      ))}
     
    </Layout>
  )
}


export async function getServerSideProps({query: {term}}){ //Dont know what some is going to search for so cant generate paths
    console.log(term)
  const query = qs.stringify({
    filters: {
      $or: [
        {                                               // All updates from the video of the new STRAPI V4 queries
            name: {
                $contains: term,
            },},
        {venue:{$contains: term,},},
        {performers:{$contains: term,},},
        {description:{$contains: term,},},

      ],
    },
 }, {
        encodeValuesOnly: true, // prettify URL
      });
  
  const res = await fetch(`${API_URL}/api/events?${query}&populate=*`) 
  const events = await res.json()
  const eventsdata = events.data
  console.log(eventsdata)
  return{
    props: {eventsdata},

  }
}