import { useTranslations } from 'next-intl';

const PopularTagsSkeleton = () => {
  const t = useTranslations('PopularTags');

  return (
    <section id="popular-tags" className="hidden lg:block">
      <h2 className="mb-4 text-2xl font-bold md:mb-8 lg:mb-10">
        {t('popular_tags_title')}
      </h2>
      <div id="tags" className="flex animate-pulse flex-wrap gap-4">
        <div
          key="tag-loading"
          className="h-8 w-24 rounded-full bg-gray-500 px-3 py-1"
        />
        <div
          key="tag-loading"
          className="h-8 w-20 rounded-full bg-gray-500 px-3 py-1"
        />
        <div
          key="tag-loading"
          className="h-8 w-32 rounded-full bg-gray-500 px-3 py-1"
        />
        <div
          key="tag-loading"
          className="h-8 w-16 rounded-full bg-gray-500 px-3 py-1"
        />
        <div
          key="tag-loading"
          className="h-8 w-36 rounded-full bg-gray-500 px-3 py-1"
        />
      </div>
    </section>
  );
};

export default PopularTagsSkeleton;
