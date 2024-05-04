import { useTranslations } from 'next-intl';

import TopicCardSkeleton from './TopicCardSkeleton';

const SuggestedTopicsSkeleton = () => {
  const t = useTranslations('SuggestedTopics');

  return (
    <section id="suggested-topics" className="animate-pulse">
      <h2 className="mb-4 text-2xl font-bold md:mb-8 lg:mb-10">
        {t('suggested_topics_title')}
      </h2>
      <div>
        <div className="mb-6 md:mb-8">
          <div
            id="suggested-room-header"
            className="flex items-center gap-4 rounded-t-md border p-4 shadow-sm"
          >
            <div className="size-10 rounded-md bg-gray-500" />
            <div className="h-3 w-10 rounded-full bg-gray-700" />
          </div>
          <div id="suggested-room-topics-container">
            <ul className="rounded-b-md bg-violet-100/50 p-4">
              {[...new Array(3)].map((_) => (
                <TopicCardSkeleton key="suggested-topic-loading" />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuggestedTopicsSkeleton;
