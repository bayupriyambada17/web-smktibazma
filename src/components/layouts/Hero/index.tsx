import React, { FC } from 'react'

interface HeroProps {

}

const Hero: FC<HeroProps> = ({ }) => {
  return (
    <div className='relative h-[550px] bg-cover bg-center' style={{ backgroundImage: "url('/hero-image.jpg')" }}>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='flex flex-col items-center justify-center h-full text-white text-center relative z-10'>
        <h3 className='text-5xl font-bold drop-shadow-lg'>SMK TI BAZMA</h3>
        <p className='mt-2 max-w-3xl text-lg drop-shadow-lg'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto similique iste iusto eveniet repellendus reprehenderit quo rem ducimus, ipsa consequatur!
        </p>
      </div>
    </div>

  )
}

export default Hero;