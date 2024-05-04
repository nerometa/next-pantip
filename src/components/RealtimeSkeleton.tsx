import { useTranslations } from 'next-intl';

import TopicCardSkeleton from './TopicCardSkeleton';

const RealtimeSkeleton = () => {
  const t = useTranslations('Realtime');

  return (
    <section id="realtime">
      <h2 className="text-2xl font-bold">{t('realtime_title')}</h2>
      <p className="mb-4 text-sm text-gray-700 md:mb-8">{t('realtime_desc')}</p>
      <ul id="realtime-topics" className="mt-8">
        {[...new Array(3)].map((_) => (
          <TopicCardSkeleton key="realtime-topic-loading" />
        ))}
      </ul>
    </section>
  );
};

export default RealtimeSkeleton;
