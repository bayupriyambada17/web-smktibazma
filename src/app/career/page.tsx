"use client"
import CareerCard from '@/components/layouts/Card/CareerCard';
import TitleTagInformation from '@/components/layouts/organisms/TitleTagInformation';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { categoryCareer, teacherCareers } from '@/constants';
import React, { FC } from 'react'

interface CareerProps {

}

const Career: FC<CareerProps> = ({ }) => {
  return (
    <div className='flex flex-col container mx-auto max-w-7xl my-4'>
      <TitleTagInformation title='Career' subTitle='This page contains information about our career' />
      <div className='my-3'>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Choose your career" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category Career</SelectLabel>
              {categoryCareer.map((item: any, index: number) => (
                <SelectItem key={index + 1} value={item.title}>{item.title}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className='grid grid-cols-1 gap-3'>
        {teacherCareers.map((item: any, index: number) => (
          <CareerCard career={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Career;