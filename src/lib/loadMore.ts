import React from "react";

export const loadMoreData = (current: any[],
  setData: React.Dispatch<React.SetStateAction<any>>,
  allData: any[],
  batchSize: number, setHasMore: React.Dispatch<React.SetStateAction<boolean>>) => { 

  const nextIndex = current.length;
  const nextBatch = allData.slice(nextIndex, nextIndex + batchSize);

  setData([...current, ...nextBatch]);
  setHasMore(current.length + nextBatch.length < allData.length);
}

export const handleScroll = (
  hasMore: any,
  loadMore: () => void
) => {
  if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
  if (hasMore) loadMore();
}