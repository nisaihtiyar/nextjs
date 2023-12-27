import React from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'


const layout = ({children}) => {
  return (
    <html lang='tr'>
        <body>
          
          <Navbar/>
          <div className="container mt-24 mx-auto px-12 py-1 "></div>
          <Card/>
          
            {children}
        </body>
    </html>
  )
}

export default layout
