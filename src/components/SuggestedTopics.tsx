'use client';

import { Button } from '@mui/base/Button';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { useGetSuggestedTopicsByBehaviorQuery } from '@/libs/redux/features/home/homeSlice';
import type {
  RoomTopic,
  RoomTopicResponse,
  TagTopic,
  TagTopicResponse,
} from '@/models/home';

import TopicCard from './TopicCard';

const SuggestedTopics = () => {
  const trackingCode = process.env.NEXT_PUBLIC_PANTIP_TRACKING_CODE!;
  const t = useTranslations('SuggestedTopics');
  const suggestedTopics = useGetSuggestedTopicsByBehaviorQuery(trackingCode);

  return (
    <section id="suggested-topics">
      <h2 className="mb-4 text-2xl font-bold md:mb-8 lg:mb-10">
        {t('suggested_topics_title')}
      </h2>
      <div>
        {suggestedTopics.currentData?.data.map(
          (item: RoomTopicResponse | TagTopicResponse) => (
            <>
              {'room_id' in item && (
                <div key={item.room_id} className="mb-6 md:mb-8">
                  <div
                    id="suggested-room-header"
                    className="flex items-center gap-4 rounded-t-md border p-4 shadow-sm"
                  >
                    <div className="max-w-[40px] rounded-md bg-violet-400 ease-in-out">
                      <Image
                        src={`https://ptcdn.info/mobile/icon_room/pt-forum-${item.room_name_en === '' ? 'all' : item.room_name_en}.svg`}
                        alt={item.room_name_th}
                        width={40}
                        height={40}
                      />
                    </div>
                    <a
                      href={`https://www.pantip.com/forum/${item.room_name_en}`}
                      className="text-xl font-semibold hover:underline"
                    >
                      {item.room_name_th}
                    </a>
                  </div>
                  <div id="suggested-room-topics-container">
                    <ul className="rounded-b-md bg-violet-100/50 p-4">
                      {item.topics.map((topic: RoomTopic) => (
                        <TopicCard key={topic.topic_id} topic={topic} />
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {'tag_id' in item && (
                <div key={item.tag_id} className="mb-6 md:mb-8">
                  <div
                    id="suggested-tag-header"
                    className="flex items-center justify-between rounded-t-md border p-4 shadow-sm"
                  >
                    <p className="text-xl font-semibold">
                      <span className="mr-1 font-bold text-violet-500">#</span>
                      <a
                        href={`https://www.pantip.com/tag/${item.tag_name}`}
                        className="hover:underline"
                      >
                        {item.tag_name}
                      </a>
                    </p>

                    <div
                      id="suggested-tag-actions"
                      className="flex  items-center gap-3"
                    >
                      <div
                        id="suggested-tag-info"
                        className="hidden gap-2 md:flex"
                      >
                        <span
                          className="inline-flex gap-2"
                          title={`จำนวนกระทู้ ${item.topic_count} กระทู้`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-messages text-yellow-500"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                            <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                          </svg>
                          <p className="text-sm text-gray-700">
                            {item.topic_count}
                          </p>
                        </span>
                        <span
                          className="inline-flex gap-2"
                          title={`จำนวนผู้ติดตาม ${item.follow_count} ผู้ใช้`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-users text-yellow-500"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                          </svg>
                          <p className="text-sm text-gray-700">
                            {item.follow_count}
                          </p>
                        </span>
                      </div>
                      <Button className="rounded-md font-bold text-violet-700 sm:bg-violet-700 sm:px-4 sm:py-2 sm:text-gray-300 sm:hover:bg-violet-800 sm:hover:text-white">
                        {t('follow')}
                      </Button>
                    </div>
                  </div>
                  <div id="suggested-tag-topics-container">
                    <ul className="rounded-b-md bg-violet-100/50 p-4">
                      {item.topics.map((topic: TagTopic) => (
                        <TopicCard key={topic.topic_id} topic={topic} />
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </>
          ),
        )}
      </div>
    </section>
  );
};

export default SuggestedTopics;
