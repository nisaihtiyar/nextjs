"use client"
import React from 'react';
import Image from "next/image";

const Misyon = () => {
  return (
    <section className="text-black" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <div className=' from-blue-300 via-white to-green-300 bg-gradient-to-tr rounded-2xl p-4 text-center shadow-md'>
            <h2 className="text-4xl font-bold cursor-default text-neutral-700 mb-4">MİSYONUMUZ</h2>
          </div>
          <div className='cursor-default bg-white m-6 rounded-md p-4 text-neutral-700 shadow-md'>
            <p className="text-base lg:text-lg ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Quia dolores eos, maxime numquam ex iure eligendi quo sed accusantium 
              voluptate assumenda praesentium est eaque nesciunt temporibus magnam error 
              culpa mollitia!
            </p>
          </div>
        </div>
        <Image className='border-4 border-gradient-to-l rounded-2xl' src="/misyon2.jpg" width={500} height={500} />
      </div>
    </section>
  );
}

export default Misyon;
