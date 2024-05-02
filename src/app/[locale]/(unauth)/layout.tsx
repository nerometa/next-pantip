import { Button } from '@mui/base/Button';
import { useTranslations } from 'next-intl';

import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: { children: React.ReactNode }) {
  const t = useTranslations('RootLayout');

  return (
    <BaseTemplate
      leftNav={
        <>
          <li>
            <a
              href="https://pantip.com/home/communities"
              className="border-none text-gray-800 hover:text-black"
            >
              {t('explore_link')}
            </a>
          </li>
          <li>
            <a
              href="https://pantip.com/home/feed"
              className="border-none text-gray-800 hover:text-black"
            >
              {t('my_feed_link')}
            </a>
          </li>
          <li>
            <a
              className="border-none text-gray-800 hover:text-black"
              href="https://pantip.com/point"
            >
              {t('pantip_point_link')}
            </a>
          </li>
        </>
      }
      rightNav={
        <>
          <li>
            <a
              href="https://pantip.com/login"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('sign_in_link')}
            </a>
          </li>

          <li>
            <Button
              href="https://pantip.com/register/email"
              className=" rounded-md bg-violet-700 px-4 py-2 font-bold text-gray-300 hover:bg-violet-800 hover:text-white"
            >
              {t('sign_up_link')}
            </Button>
          </li>
        </>
      }
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}
