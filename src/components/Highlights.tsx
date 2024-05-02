'use client';

import {
  useGetHighlightsQuery,
  useGetRecommendedRoomsQuery,
} from '@/libs/redux/features/home/homeSlice';

const Highlights = () => {
  const highlights = useGetHighlightsQuery();
  const rooms = useGetRecommendedRoomsQuery(
    process.env.NEXT_PUBLIC_PANTIP_TRACKING_CODE,
  );
  console.log('highlights', highlights.currentData);
  console.log('highlights', rooms.currentData);

  return <h2>Highlights</h2>;
};

export default Highlights;
