"use client"
import EducatorCard from '@/components/layouts/Card/EducatorCard';
import TitleTagInformation from '@/components/layouts/organisms/TitleTagInformation';
import { educators } from '@/constants';
import { handleScroll, loadMoreData } from '@/lib/loadMore';
import React, { FC, useCallback, useEffect, useState } from 'react'


interface StaffProps {
}

const Staff: FC<StaffProps> = ({ }) => {
  const [visible, setVisible] = useState<any>(educators.slice(0, 12));
  const [hasMore, setHasMore] = useState<any>(educators.length > 0);

  const loadMore = useCallback(() => {
    loadMoreData(visible, setVisible, educators, 12, setHasMore);
  }, [visible]);

  const onScroll = useCallback(() => {
    handleScroll(hasMore, loadMore);
  }, [hasMore, loadMore]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll])
  return (
    <div className='flex flex-col mx-auto container max-w-7xl my-4'>
      <TitleTagInformation title='Educator Organization' subTitle='This page contains the names of teaching staff, you can see all staff here' />
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 mt-8'>
        {visible?.map((educator: any, index: number) => (
          <EducatorCard educator={educator} key={index} />
        ))}
      </div>
      {hasMore && (
        <div className='flex justify-center mt-4'>
          <button onClick={loadMore} className='px-4 py-2 bg-blue-500 text-white rounded'>
            Load More
          </button>
        </div>
      )}
    </div>
  )
}

export default Staff;