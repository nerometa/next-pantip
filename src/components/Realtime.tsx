'use client';

import { useTranslations } from 'next-intl';

import { useGetRealtimeQuery } from '@/libs/redux/features/home/homeSlice';
import type { Topic } from '@/models/home';

import RealtimeSkeleton from './RealtimeSkeleton';
import TopicCard from './TopicCard';

const Realtime = () => {
  const t = useTranslations('Realtime');
  const realtime = useGetRealtimeQuery();

  if (realtime.isLoading) return <RealtimeSkeleton />;

  return (
    <section id="realtime">
      <h2 className="text-2xl font-bold">{t('realtime_title')}</h2>
      <p className="mb-4 text-sm text-gray-700 md:mb-8">{t('realtime_desc')}</p>
      <ul id="realtime-topics" className="mt-8">
        {realtime.currentData?.realtime.data.map((topic: Topic) => (
          <TopicCard key={topic.topic_id} topic={topic} />
        ))}
      </ul>
    </section>
  );
};

export default Realtime;
