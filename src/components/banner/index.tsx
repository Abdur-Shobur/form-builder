import Image from 'next/image';
import Link from 'next/link';
import { content } from '../../store/content';
export default function Banner() {
  return (
    <section
      className="ms-banner"
      id="ms-banner"
      style={{ background: '#080921' }}
    >
      <div className="b-content">
        <h1 className="b-title">
          {content.home.title}
          <span className="b-highlight"> {content.home.title2}</span>
        </h1>
        <p className="b-description">{content.home.description}</p>
        <div className="mb-12 flex flex-col justify-center md:flex-row gap-5 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
          <Link
            href="/antd-playground"
            className="cursor-pointer bg-indigo-600 py-3 px-6 rounded-full flex items-center justify-center text-sm font-semibold text-white transition-all duration-500 focus:outline-none hover:bg-indigo-700"
          >
            Ant Design Playground
          </Link>
          <Link
            href="/tailwind-playground"
            className="cursor-pointer bg-indigo-50 py-3 px-6 rounded-full flex items-center justify-center  text-sm font-semibold text-indigo-600 transition-all duration-500 focus:outline-none hover:bg-indigo-100"
          >
            Tailwind Playground
          </Link>
        </div>
      </div>

      <div>
        <div className="banner-image">
          <div className="img">
            <Image
              className="b-image object-contain"
              alt="banner"
              src="/image.png"
              width={1500}
              height={1500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
