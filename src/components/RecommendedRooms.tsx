'use client';

import { Button } from '@mui/base/Button';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { useGetRecommendedRoomsQuery } from '@/libs/redux/features/home/homeSlice';
import type { Room } from '@/models/home';

const RecommendedRooms = () => {
  const trackingCode: string = process.env.NEXT_PUBLIC_PANTIP_TRACKING_CODE!;
  const t = useTranslations('RecommendedRooms');
  const recommendedRooms = useGetRecommendedRoomsQuery(trackingCode);

  return (
    <section id="recommended-rooms" className="mb-16">
      <h2 className="mb-4 text-2xl font-bold md:mb-8 lg:mb-10">
        {t('recommended_rooms_title')}
      </h2>
      <div className="grid auto-cols-[100px] grid-flow-col grid-rows-[repeat(2,_minmax(0,_100px))] overflow-x-scroll pb-4">
        {recommendedRooms.currentData?.data.map((room: Room) => (
          <Button
            key={room.id}
            href={`https://www.pantip.com/forum/${room.slug}`}
            className="flex flex-col items-center justify-center ease-in-out hover:bg-neutral-300"
          >
            <div className="mb-2 max-w-[40px] rounded-md bg-violet-400 ease-in-out">
              <Image
                src={`https://ptcdn.info/mobile/icon_room/pt-forum-${room.slug === '' ? 'all' : room.slug}.svg`}
                alt={room.name}
                width={40}
                height={40}
              />
            </div>
            <p>{room.name}</p>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default RecommendedRooms;
