import { Button } from '@mui/base/Button';
import { useTranslations } from 'next-intl';

const RecommendedRoomsSkeleton = () => {
  const t = useTranslations('RecommendedRooms');

  return (
    <section id="recommended-rooms" className="mb-16 animate-pulse">
      <h2 className="mb-4 text-2xl font-bold md:mb-8 lg:mb-10">
        {t('recommended_rooms_title')}
      </h2>
      <div className="grid auto-cols-[100px] grid-flow-col grid-rows-[repeat(2,_minmax(0,_100px))] overflow-x-scroll pb-4">
        {[...new Array(20)].map((_) => (
          <Button
            disabled
            key="room-loading"
            className="flex flex-col items-center justify-center"
          >
            <div className="mb-2 size-10 rounded-md bg-gray-500" />
            <div className="w-6">
              <div className="mb-2.5 h-2 rounded-full bg-gray-300 dark:bg-gray-600" />
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default RecommendedRoomsSkeleton;
