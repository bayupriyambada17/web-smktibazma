import React, { FC } from 'react'

interface TitleTagInformationProps {
  title: string;
  subTitle: string;

}

const TitleTagInformation: FC<TitleTagInformationProps> = ({ title = 'This is title', subTitle = 'This is subTitle' }) => {
  return (
    <div>
      <h4 className='text-2xl font-semibold'>{title}</h4>
      <p className='text-sm font-normal'>{subTitle}</p>
    </div>
  )
}

export default TitleTagInformation;