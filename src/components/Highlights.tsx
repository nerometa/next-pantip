'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { useGetHighlightsQuery } from '@/libs/redux/features/home/homeSlice';

import HighlightSkeleton from './HighlightsSkeleton';

const Highlights = () => {
  const t = useTranslations('Highlights');
  const highlights = useGetHighlightsQuery();

  if (highlights.isLoading) return <HighlightSkeleton />;

  return (
    <section id="highlight" className="mb-16">
      <h2 className="mb-4 text-2xl font-bold md:mb-8 lg:mb-10">
        {t('highlights_title')}
      </h2>
      <div className="flex flex-nowrap items-start gap-8 overflow-x-scroll">
        {highlights.currentData?.data.map((item) => (
          <a
            href={item.post_url}
            key={item.name}
            className="w-2/3 max-w-[400px] flex-none rounded-lg ease-in-out hover:text-gray-700 md:w-1/3 md:pb-4"
          >
            <div id="highlight-img-wrapper">
              <Image
                className="rounded-lg"
                src={item.image_url[1]!}
                alt={item.name}
                width={400}
                height={300}
                priority
              />
            </div>
            <p className="my-4 line-clamp-3 font-semibold">{item.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
