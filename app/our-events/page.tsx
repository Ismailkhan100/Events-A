import React from 'react'
import Navbar from '@/app/components/Navbar'
import Events from '@/app/our-events/events'
import Footer from '@/app/components/Footer'

function page() {
  return (
    <div>
        <Navbar />
        <Events />
        <Footer />     
    </div>
  )
}

export default page
