import React from 'react'
import Navbar from '@/app/components/Navbar'
import Services from '@/app/Services/services'
import Footer from '@/app/components/Footer'

function page() {
  return (
    <div>
        <Navbar />
        <Services />
        <Footer />     
    </div>
  )
}

export default page
