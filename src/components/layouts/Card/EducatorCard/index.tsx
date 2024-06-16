"use client"
import Image from 'next/image';
import React, { FC } from 'react'

type EducatorCardType = {
  name: string;
  subject: string;
  image: string;
}
interface EducatorCardProps {
  educator: EducatorCardType;
}

const EducatorCard: FC<EducatorCardProps> = ({ educator }) => {
  return (
    <div className='bg-white shadow rounded-md overflow-hidden'>
      <Image src={educator?.image} className='bg-cover' alt="test" height="250" width="300" />
      <div className='p-3'>
        <h4 className='text-xl font-semibold'>{educator?.name}</h4>
        <p>{educator?.subject}</p>

      </div>
    </div>
  )
}

export default EducatorCard;