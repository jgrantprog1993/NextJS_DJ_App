import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import { API_URL } from '@/config/index'
import Link from 'next/link'



export default function HomePage({events}) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3> No Events to show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt}/>
      ))}
      {events.length > 0 && (
        <Link legacyBehavior href='/events'>
          <a className='btn-secondaey'>View All Events</a>
        </Link >
      )}
    </Layout>
  )
}


export async function getStaticProps(){
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()
  console.log(events)

  return {
    props: {events: events.slice(0,3)},
    revalidate: 1,
  }
}