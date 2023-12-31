import React from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'
import Slider from '@/components/Slider'
import Footer from '@/components/Footer'



const layout = ({children}) => {
  return (
    <html lang='tr'>
        <body>
          
          <Navbar/>
          <div className="container mt-20 mx-auto px-12 py-1 "></div>
          <Slider/>
          
          <Footer/>
            {children}
        </body>
    </html>
  )
}

export default layout
