import { useTranslations } from 'next-intl';

const HighlightSkeleton = () => {
  const t = useTranslations('Highlights');

  return (
    <section id="highlight" className="mb-16 animate-pulse">
      <h2 className="mb-4 text-2xl font-bold md:mb-8 lg:mb-10">
        {t('highlights_title')}
      </h2>
      <div className="flex flex-nowrap items-start gap-8 overflow-x-scroll">
        {[...new Array(3)].map((_) => {
          return (
            <div
              key="loading"
              className="w-2/3 max-w-[400px] flex-none space-y-4 rounded-lg ease-in-out hover:text-gray-700 md:w-1/3 md:pb-4"
            >
              <div
                id="highlight-img-wrapper"
                className="flex h-36 w-full items-center justify-center rounded bg-gray-300 md:h-40 lg:h-60 dark:bg-gray-600"
              >
                <svg
                  className="size-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
              <div className="w-full">
                <div className="mb-2.5 h-2 rounded-full bg-gray-700" />
                <div className="mb-2.5 h-2 rounded-full bg-gray-700" />
                <div className="mb-2.5 h-2 max-w-[440px] rounded-full bg-gray-700" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HighlightSkeleton;
