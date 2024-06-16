import { LocateIcon, MailCheckIcon, MapIcon, TimerIcon } from 'lucide-react';
import React, { FC } from 'react'

interface AnnouncementProps {

}

const Announcement: FC<AnnouncementProps> = ({ }) => {
  return (
    <div className='bg-[#0057b8] py-4'>
      <div className='flex max-w-7xl container mx-auto'>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-white pr-4 border-r border-border">
            <MailCheckIcon className='w-4 h-4' />
            <span className='text-sm'>info@smktibazma.sch.id</span>
          </div>
          <div className="flex items-center gap-2 text-white pr-4 border-r border-border">
            <TimerIcon className='w-4 h-4' />
            <span className='text-sm'>05.00 - 21.00</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <MapIcon className='w-4 h-4' />
            <span className='text-sm'>Ciampea, Kab Bogor.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Announcement;