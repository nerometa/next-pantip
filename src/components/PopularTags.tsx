'use client';

import { useTranslations } from 'next-intl';

import { useGetPopularTagsQuery } from '@/libs/redux/features/home/homeSlice';

import PopularTagsSkeleton from './PopularTagsSkeleton';

const PopularTags = () => {
  const tags = useGetPopularTagsQuery(10);
  const t = useTranslations('PopularTags');

  if (tags.isLoading) return <PopularTagsSkeleton />;

  return (
    <section id="popular-tags" className="hidden lg:block">
      <h2 className="mb-4 text-2xl font-bold md:mb-8 lg:mb-10">
        {t('popular_tags_title')}
      </h2>
      <div id="tags" className="flex flex-wrap gap-4">
        {tags.currentData?.data.map((tag) => (
          <a
            key={tag.name}
            className="rounded-full bg-violet-700 px-3 py-1 font-semibold text-white ease-in-out hover:bg-violet-800"
            href={`https://www.pantip.com/tag/${tag.slug}`}
          >
            {tag.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default PopularTags;
