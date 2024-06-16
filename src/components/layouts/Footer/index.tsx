import React, { FC } from 'react'

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
  return (
    <div className='bg-white py-4 text-center'>
      <footer className='text-sm'>Copyright © {new Date().getFullYear()} SMK TI BAZMA. All Rights Reserved. Created By: Bayu PM</footer>
    </div>
  )
}

export default Footer;