import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import { API_URL } from '@/config/index'
import Link from 'next/link'
import Showcase from '@/components/Showcase'


export default function EventsPage({eventsdata}) {
  return (
    <Layout>
      
      <h1>Events</h1>
      {eventsdata.length === 0 && <h3> No Events to show</h3>}
      {eventsdata.map((eventsdata) => (
        <EventItem key={eventsdata.id} evt={eventsdata}/>
      ))}
     
    </Layout>
  )
}


export async function getStaticProps(){
  const res = await fetch(`${API_URL}/api/events?populate=*`) //?https://stackoverflow.com/questions/70506535/image-url-not-showing-on-api-call-strapi-v4-in-single-collection-type
  const events = await res.json()
  const eventsdata = events.data

  return{
    props: {eventsdata},
    revalidate: 1,
  }
}