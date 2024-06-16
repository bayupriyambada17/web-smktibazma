"use client"

import { Button } from '@/components/ui/button';
import { menu } from '@/constants';
import { AlignRightIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react'

interface HeaderProps { }

const Header: FC<HeaderProps> = ({ }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const donationPage = () => router.push('/donation');

  return (
    <div className='flex items-center py-3 border-b border-border bg-white shadow-md sticky top-0 w-full'>
      <div className='flex justify-between mx-auto container max-w-7xl items-center'>
        <div>
          <h1 className='text-2xl font-bold'>SMK TI BAZMA</h1>
        </div>
        <div className='md:hidden'>
          <Button variant={"outline"} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XIcon className='w-6 h-6' />
            )
              : (
                <AlignRightIcon className='w-6 h-6' />
              )}
          </Button>
        </div>
        <div className={`md:flex md:flex-row md:items-center md:gap-1 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className={`flex flex-col md:flex-row items-center gap-1 ${isOpen ? 'mt-4 md:mt-0' : 'mt-0'}`}>
            {menu.map((item: any, index: number) => (
              <li key={index}>
                <Link href={item.path} className='hover:bg-blue-500 hover:text-white transition-all px-3 py-2 rounded block'>
                  {item.name}
                </Link>
              </li>
            ))}
            <li className='gap-1 flex'>
              <Button onClick={donationPage} className='px-3 py-2 bg-[#c9112f] text-white'>PPDB!</Button>
              <Button onClick={donationPage} className='px-3 py-2 bg-[#0057b8] text-white'>AYO DONASI!</Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;