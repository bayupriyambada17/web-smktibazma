"use client"
import EducatorCard from '@/components/layouts/Card/EducatorCard';
import TitleTagInformation from '@/components/layouts/organisms/TitleTagInformation';
import { educators } from '@/constants';
import React, { FC, useEffect, useState } from 'react'


interface StaffProps {
}

const Staff: FC<StaffProps> = ({ }) => {
  const [visibleEducators, setVisibleEducators] = useState<any>(educators.slice(0, 12));
  const [hasMore, setHasMore] = useState<any>(educators.length > 0);

  const loadMore = () => {
    const nextIndex = visibleEducators.length;
    const nextBatch = educators.slice(nextIndex, nextIndex + 12);
    setVisibleEducators([...visibleEducators, ...nextBatch]);
    setHasMore(visibleEducators.length + nextBatch.length < educators.length);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    if (hasMore) loadMore();
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleEducators, hasMore, handleScroll]);
  return (
    <div className='flex flex-col mx-auto container max-w-7xl my-4'>
      <TitleTagInformation title='Educator Organization' subTitle='This page contains the names of teaching staff, you can see all staff here' />
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 mt-8'>
        {visibleEducators.map((educator: any, index: number) => (
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