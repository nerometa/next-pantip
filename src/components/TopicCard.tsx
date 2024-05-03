import Image from 'next/image';
import { useFormatter } from 'next-intl';

import type { Topic } from '@/models/home';

interface Props {
  topic: Topic;
}

const TopicCard = ({ topic }: Props) => {
  const format = useFormatter();
  return (
    <div className="mb-8 flex flex-col items-center justify-start gap-3 overflow-hidden rounded-xl border border-gray-300 bg-white ease-in-out hover:bg-neutral-200/75 md:flex-row md:p-2 lg:mb-4">
      {topic.thumbnail_url && (
        <div className="relative h-48 w-full shrink-0 md:h-20 md:w-32">
          <Image
            className="absolute left-0 top-0 size-full rounded-xl object-cover object-center transition duration-75"
            loading="lazy"
            layout="fill"
            src={topic.thumbnail_url}
            alt={topic.title}
          />
        </div>
      )}

      <div className="flex w-full flex-col justify-center gap-2 p-2 md:p-0">
        <a
          className="font-bold ease-in-out hover:text-gray-700"
          href={`https://www.pantip.com/topic/${topic.topic_id}`}
        >
          {topic.title}
        </a>
        <div className="topic-info flex justify-between">
          <div className="topic-author-info">
            <p className="author mr-2 text-sm">{topic.author.name}</p>
            <p className="created text-sm text-gray-600">
              {format.relativeTime(topic.created_time)}
            </p>
          </div>

          <span className="topic-comments inline-flex items-end gap-1">
            <svg
              className="size-6 text-yellow-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6.616l-2.88 2.592C8.537 20.461 7 19.776 7 18.477V17H5a2 2 0 0 1-2-2V6Zm4 2a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7Zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-8 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm5 0a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z"
                clip-rule="evenodd"
              />
            </svg>

            <span className="text-sm text-gray-600">
              {topic.comments_count}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
