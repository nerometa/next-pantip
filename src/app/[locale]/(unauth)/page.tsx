import { getTranslations } from 'next-intl/server';

import Highlights from '@/components/Highlights';
import PopularTags from '@/components/PopularTags';
import Realtime from '@/components/Realtime';
import RecommendedRooms from '@/components/RecommendedRooms';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <>
      <Highlights />
      <RecommendedRooms />
      <div className="gap-4 lg:grid lg:grid-cols-3">
        <div className="col-span-2">
          <Realtime />
        </div>
        <PopularTags />
      </div>
    </>
  );
}
