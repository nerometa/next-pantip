import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full px-8 antialiased">
      <div className="mx-auto">
        <header className="border-b border-gray-300 py-4">
          <div className="flex items-center justify-between">
            <section id="main-nav" className="flex items-center">
              <a href="/">
                <Image
                  width={80}
                  height={0}
                  src="/pantip-logo.png"
                  alt="Pantip"
                />
              </a>

              <nav className="ml-8">
                <ul className="flex flex-wrap gap-x-5">{props.leftNav}</ul>
              </nav>
            </section>

            <nav>
              <ul className="flex flex-wrap gap-x-5">{props.rightNav}</ul>
            </nav>
          </div>
        </header>

        <main>{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.name}.
          {` ${t('made_with')} `}
          <a
            href="https://creativedesignsguru.com"
            className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          >
            CreativeDesignsGuru
          </a>
          .
          {/*
           * PLEASE READ THIS SECTION
           * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
           */}
        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
