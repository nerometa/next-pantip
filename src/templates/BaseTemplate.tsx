import Image from 'next/image';
import { useTranslations } from 'next-intl';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  mobileNav: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <>
      <header className="sticky left-0 top-0 z-50 w-full border-b border-gray-300 bg-white p-4 sm:px-8">
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

            <nav className="ml-8 hidden sm:block">
              <ul className="flex flex-wrap gap-x-5">{props.leftNav}</ul>
            </nav>
          </section>

          <nav className="hidden sm:block">
            <ul className="flex flex-wrap items-center gap-x-5">
              {props.rightNav}
            </ul>
          </nav>

          <nav id="mobile-nav" className="sm:hidden">
            {props.mobileNav}
          </nav>
        </div>
      </header>

      <div className="w-full px-4 antialiased sm:px-8">
        <div className="mx-auto">
          <main>{props.children}</main>

          <footer className="border-t border-gray-300 py-8 text-sm md:grid md:grid-cols-2 md:grid-rows-2">
            <section id="about-us" className="mb-4">
              <h3 className="mb-2 text-lg font-semibold">{t('about_us')}</h3>
              <ul>
                <li>
                  <a
                    href="https://pantip.com/about/defamation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('posts_instruction')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://pantip.com/about/privilege"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('members_privilege')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://pantip.com/app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('download_pantip_app')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://pantip.com/about/certified_developer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('pantip_certified_developer')}
                  </a>
                </li>
              </ul>
            </section>

            <section id="contact-us" className="mb-4">
              <h3 className="mb-2 text-lg font-semibold">{t('contact_us')}</h3>
              <ul>
                <li>
                  <a
                    href="https://pantip.com/about/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('contact')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://pantip.com/advertising"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('advertising')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://pantip.com/about/job"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('work_with_pantip')}
                  </a>
                </li>
              </ul>
            </section>

            <ul
              id="social-links"
              className="col-start-2 mb-4 flex gap-4 md:mb-1 md:items-start"
            >
              <li
                id="facebook"
                className="rounded-sm bg-gray-800 hover:bg-gray-900"
              >
                <a
                  href="https://www.facebook.com/pantipdotcom/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="size-6 text-white"
                    fill="currentColor"
                    viewBox="-2.4 -2.4 28.80 28.80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path d="M22,3V21a1,1,0,0,1-1,1H15.8V14.255h2.6l.39-3.018H15.8V9.309c0-.874.242-1.469,1.5-1.469h1.6V5.14a21.311,21.311,0,0,0-2.329-.119A3.636,3.636,0,0,0,12.683,9.01v2.227H10.076v3.018h2.607V22H3a1,1,0,0,1-1-1V3A1,1,0,0,1,3,2H21A1,1,0,0,1,22,3Z" />
                    </g>
                  </svg>
                </a>
              </li>
              <li
                id="twitter"
                className="rounded-sm bg-gray-800 hover:bg-gray-900"
              >
                <a
                  href="https://twitter.com/Pantip1996"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="size-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li
                id="youtube"
                className="rounded-sm bg-gray-800 hover:bg-gray-900"
              >
                <a
                  href="https://www.youtube.com/@pantipchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">YouTube</span>
                  <svg
                    className="size-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li
                id="instagram"
                className="rounded-sm bg-gray-800 hover:bg-gray-900"
              >
                <a
                  href="https://www.instagram.com/pantipdotcom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="size-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li
                id="tiktok"
                className="rounded-sm bg-gray-800 hover:bg-gray-900"
              >
                <a
                  href="https://www.tiktok.com/@pantip1996"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">TikTok</span>
                  <svg
                    className="size-6 text-white"
                    viewBox="0 0 14 14"
                    role="img"
                    focusable="false"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier" fill="currentColor">
                      <path d="m 4.9520184,12.936803 c -1.12784,-0.2039 -2.19411,-0.9875 -2.66789,-1.9606 -0.32895,-0.6757 -0.45541,-1.3901003 -0.37418,-2.1137003 0.15054,-1.3412 0.84482,-2.4395 1.92406,-3.0439 0.56899,-0.3186 1.38421,-0.4769 1.991,-0.3867 l 0.35091,0.052 9e-5,1.0725 9e-5,1.0725 -0.332,-0.014 c -0.79998,-0.033 -1.39595,0.3096 -1.70379,0.9784 -0.1473,0.32 -0.18461,0.8887 -0.081,1.2351 0.12773,0.4273003 0.50542,0.8132003 0.96145,0.9825003 0.15535,0.058 0.32344,0.08 0.61152,0.079 0.35862,-4e-4 0.42448,-0.013 0.67663,-0.1323 0.36505,-0.1726 0.63141,-0.4231 0.78797,-0.7411 0.10147,-0.2061003 0.13414,-0.3430003 0.16587,-0.6951003 0.0217,-0.2412 0.0401,-2.2122 0.0409,-4.38 l 10e-4,-3.94149998 0.68371,0 c 0.37605,0 0.8277,0.012 1.00368,0.027 l 0.31995,0.027 0,0.1584 c 0,0.3813 0.22299,1.1127 0.45156,1.4812 0.0571,0.092 0.2564996,0.3178 0.4431796,0.5018 0.36068,0.3555 0.66494,0.5352 1.13352,0.6692 0.138,0.04 0.28359,0.089 0.32353,0.109 0.0399,0.02 0.11522,0.038 0.16728,0.038 0.0521,4e-4 0.13701,0.012 0.18876,0.026 l 0.0941,0.025 0,0.9948 0,0.9948 -0.17773,-0.019 c -0.9611,-0.1037 -1.72925,-0.3601 -2.3423096,-0.782 -0.30468,-0.2096 -0.33102,-0.222 -0.30218,-0.1422 0.0104,0.029 0.003,1.1249 -0.0164,2.436 -0.0336,2.2728 -0.0396,2.3992 -0.12781,2.7173003 -0.33904,1.2222 -1.09994,2.1297 -2.10183,2.5068 -0.6126,0.2306 -1.39679,0.2932 -2.09405,0.1671 z" />
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
            <section
              id="copyright"
              className="border-t pt-2 md:col-start-[-3] md:row-start-2"
            >
              <p className="mb-2">
                © {new Date().getFullYear()} Internet Marketing co., ltd.
                {` ${t('made_with')} `}
                <a
                  href="https://creativedesignsguru.com"
                  className="text-violet-700 hover:border-b hover:border-violet-700"
                >
                  CreativeDesignsGuru
                </a>
                .
              </p>

              <ul id="tos-privacy" className="flex gap-2">
                <li>
                  <a href="https://pantip.com/about/tos">
                    {t('terms_of_service')}
                  </a>
                </li>
                <li>
                  <a href="https://pantip.com/about/privacy">{t('privacy')}</a>
                </li>
              </ul>
            </section>
            {/*
             * PLEASE READ THIS SECTION
             * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
             * The link doesn't need to appear on every pages, one link on one page is enough.
             * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
             */}
          </footer>
        </div>
      </div>
    </>
  );
};

export { BaseTemplate };
