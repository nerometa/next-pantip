import { Button } from '@mui/base/Button';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem } from '@mui/base/MenuItem';
import { visuallyHidden } from '@mui/utils';
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
      mobileNav={
        <Dropdown className="pt-4">
          <MenuButton>
            <p style={visuallyHidden}>Menu</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </MenuButton>
          <Menu className="z-50 rounded-md border-slate-300 bg-white p-4 shadow-lg">
            <section
              id="mobile-nav-signinout"
              className="border-b border-slate-400 pb-2"
            >
              <MenuItem className="p-2 ">
                <a
                  href="https://pantip.com/register/email"
                  className="font-bold text-violet-700  hover:text-violet-800"
                >
                  {t('sign_up_link')}
                </a>
              </MenuItem>
              <MenuItem className="p-2">
                <a
                  href="https://pantip.com/login"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  {t('sign_in_link')}
                </a>
              </MenuItem>
            </section>

            <section id="mobile-nav-pages" className="pt-2">
              <MenuItem className="p-2">
                <a
                  href="https://pantip.com/home/communities"
                  className="border-none text-gray-800 hover:text-black"
                >
                  {t('explore_link')}
                </a>
              </MenuItem>
              <MenuItem className="p-2">
                <a
                  href="https://pantip.com/home/feed"
                  className="border-none text-gray-800 hover:text-black"
                >
                  {t('my_feed_link')}
                </a>
              </MenuItem>
              <MenuItem className="p-2">
                <a
                  className="border-none text-gray-800 hover:text-black"
                  href="https://pantip.com/point"
                >
                  {t('pantip_point_link')}
                </a>
              </MenuItem>
            </section>
          </Menu>
        </Dropdown>
      }
    >
      <div className="py-5">{props.children}</div>
    </BaseTemplate>
  );
}
