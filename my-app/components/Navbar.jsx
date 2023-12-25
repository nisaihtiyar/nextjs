import React from 'react'
import Image from 'next/image'
import Logo from '../public/Logo.png'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='fixed w-full h-16 shadow-xl bg-blue-700 text-slate-300'>
        <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>

            <Link href='/'>
            <Image
            src={Logo}
            alt="logo"
            width={120}
            className='cursor-pointer'
            priorty
            />
            </Link>

          <div>
            <ul className="hidden sm:flex">
            <Link href="/hakkimizda">
            <li className="ml-10 uppercase hover:border-b text-xl">
                Hakkımızda
              </li> 
            </Link>
            <Link href="/hekimler">
              <li className="ml-10 uppercase hover:border-b text-xl">
                Hekimler
              </li>
            </Link>
            <Link href="/hedefler">
              <li className="ml-10 uppercase hover:border-b text-xl ">
                Hedefler
              </li> 
            </Link>
            </ul>
          </div>  

          <div>
            
          </div>

        </div>
    </nav>
  )
}

export default Navbar
