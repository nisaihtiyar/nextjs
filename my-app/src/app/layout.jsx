import React from 'react'
import './globals.css'
import Navbar from '../../components/Navbar'

const layout = ({children}) => {
  return (
    <html lang='tr'>
        <body>
          
          <Navbar/>
            {children}
        </body>
    </html>
  )
}

export default layout
