'use client';

import Image from 'next/image';

import { useGetHighlightsQuery } from '@/libs/redux/features/home/homeSlice';

const Highlights = () => {
  const highlights = useGetHighlightsQuery();

  return (
    <section id="highlight">
      <h2 className="mb-8 text-2xl font-bold">Highlights</h2>
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
