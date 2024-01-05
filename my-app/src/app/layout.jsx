import React from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'
import Slider from '@/components/Slider'
import Footer from '@/components/Footer'
import Vizyon from '@/components/Vizyon'
import Misyon from '@/components/Misyon'
import ProjectsSection from '@/components/ProjectsSection'
import HeroSection from '@/components/HeroSec'
import AboutSection from '@/components/About'
import Card from '@/components/Card'

const layout = ({children}) => {
  return (
    <html lang='tr'>
        <body>
          
          <Navbar/>
          <div className="container mt-20 mx-auto px-12 py-1 "></div>     
          <Slider/>
          <Misyon/>
          <Vizyon/>
          <ProjectsSection /> 
          <Card/>
        

          <Footer/>
         
            {children}
        </body>
    </html>
  )
}

export default layout;