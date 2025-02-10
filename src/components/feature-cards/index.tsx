import React from 'react';
import { content } from '../../store/content';
import Link from 'next/link';

export default function FeatureCards() {
  return (
    <div style={{ background: '#080921' }}>
      <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <h2 className="text-4xl font-bold text-white leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
                {content.feature.title}
              </h2>
            </div>
            <div className="relative w-full text-center  lg:text-left lg:w-2/4">
              <p className="text-lg font-normal text-gray-500 mb-5">
                {content.feature.description}
              </p>
              <Link
                href="/antd-playground"
                className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-indigo-600 lg:justify-start hover:text-indigo-700 "
              >
                Try Ant Design{' '}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                    stroke="#4F46E5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            {content.feature.cards?.map((card, index) => (
              <div
                key={index}
                className="group relative w-full bg-gradient-to-r from-[#080921] to-stone-800 backdrop-blur-lg rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:from-[#080921] hover:to-stone-700"
              >
                <div className="bg-white/30 backdrop-blur-md rounded-full flex justify-center items-center mb-5 w-14 h-14">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 capitalize transition-all duration-500 group-hover:text-gray-200">
                  {card.title}
                </h4>
                <p className="text-sm font-normal text-white/80 transition-all duration-500 leading-5 group-hover:text-gray-200">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
