import React, { FC } from 'react'

type InformatinCardType = {
  title: string;
  description: string;
  date: string;
  author: string;
}
interface InformationCardProps {
  information: InformatinCardType;
}

const InformationCard: FC<InformationCardProps> = ({ information }) => {
  return (
    <div className='bg-white shadow rounded-md p-4'>
      <div className='flex flex-col gap-3'>
        <h4 className='text-xl font-semibold'>{information?.title}</h4>
        <p className='text-sm' dangerouslySetInnerHTML={{ __html: information?.description }}></p>
        <div className='text-xs'>Posted: {information?.date} - By: {information?.author} </div>
      </div>
    </div>
  )
}

export default InformationCard;