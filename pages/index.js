import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import { API_URL } from '@/config/index'
import Link from 'next/link'
import Showcase from '@/components/Showcase'


export default function HomePage({eventsdata}) {
  return (
    <Layout>
      
      <h1>Upcoming Events</h1>
      {eventsdata.length === 0 && <h3> No Events to show</h3>}
      {eventsdata.map((eventsdata) => (
        <EventItem key={eventsdata.id} evt={eventsdata}/>
      ))}
      {eventsdata.length > 0 && (
        <Link legacyBehavior href='/events'>
          <a className='btn-secondaey'>View All Events</a>
        </Link >
      )}
    </Layout>
  )
}


export async function getStaticProps(){
  const res = await fetch(`${API_URL}/api/events?populate=*&_sort=date:ASC&_lim=3`) //_sort=date:ASC&_lim=3
  const events = await res.json()
  //console.log(events.data)
  const eventsdata = events.data
  //console.log(eventsdata.length)
  
  return {
    props: {eventsdata},
    revalidate: 1,
  }
}