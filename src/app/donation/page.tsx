import TitleTagInformation from '@/components/layouts/organisms/TitleTagInformation';
import { donate } from '@/constants';
import React, { FC } from 'react'

interface DonationProps {

}

const Donation: FC<DonationProps> = ({ }) => {
  return (
    <div className='flex flex-col container mx-auto max-w-7xl my-4'>
      <TitleTagInformation title='Donate' subTitle='This page contains information about distribution of donations' />
      <div className='bg-white shadow rounded-md p-4 mt-4' dangerouslySetInnerHTML={{ __html: donate.description!! }}></div>
    </div>
  )
}

export default Donation;