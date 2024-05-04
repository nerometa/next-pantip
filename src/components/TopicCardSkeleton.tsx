const TopicCardSkeleton = () => {
  return (
    <div className="mb-8 flex animate-pulse flex-col items-center justify-start gap-3 overflow-hidden rounded-xl border border-gray-300 bg-white md:flex-row md:p-2 lg:mb-4">
      <div className="flex h-48 w-full shrink-0 items-center justify-center rounded-xl bg-gray-400 md:h-20 md:w-32">
        <svg
          className="size-10 text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>

      <div className="flex w-full flex-col justify-center gap-2 p-2 md:p-0">
        <div>
          <div className="mb-2.5 h-2 rounded-full bg-gray-600" />
          <div className="mb-2.5 h-2 rounded-full bg-gray-600" />
          <div className="mb-2.5 h-2 rounded-full bg-gray-600" />
        </div>
        <div className="topic-info flex justify-between">
          <div className="topic-author-info w-full">
            <div className="mb-2.5 mr-2 h-2 w-28 rounded-full bg-gray-500" />
            <div className="mb-2.5 h-2 w-14 rounded-full bg-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCardSkeleton;
