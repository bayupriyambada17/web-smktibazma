"use client"

import InformationCard from '@/components/layouts/Card/InformationCard';
import TitleTagInformation from '@/components/layouts/organisms/TitleTagInformation';
import { information } from '@/constants';
import { handleScroll, loadMoreData } from '@/lib/loadMore';
import React, { FC, useCallback, useEffect, useState } from 'react'

interface InformationProps {

}

const Information: FC<InformationProps> = ({ }) => {
  const [visible, setVisible] = useState<any>(information.slice(0, 8));
  const [hasMore, setHasMore] = useState<any>(information.length > 0);

  const loadMore = useCallback(() => {
    loadMoreData(visible, setVisible, information, 8, setHasMore);
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
      <TitleTagInformation title="Information" subTitle="Pages that provide information about competitions, activities, etc and the latest information at the top" />
      <div className='grid grid-cols-1 gap-3 mt-4'>
        {visible.map((information: any, index: number) => (
          <InformationCard key={index} information={information} />
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

export default Information;