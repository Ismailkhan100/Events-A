import React from 'react'
import Navbar from '@/app/components/Navbar'
import Gallery from '@/app/gallery/gallery'
import Footer from '@/app/components/Footer'

function page() {
  return (
    <div>
        <Navbar />
        <Gallery />
        <Footer />     
    </div>
  )
}

export default page
