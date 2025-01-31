import Link from 'next/link';
import React from 'react';
import { LinkItem } from './link-item';

export function Header() {
  const menu = [
    {
      name: 'Home',
      href: '/',
      current: true,
    },
    {
      name: 'Components',
      href: '/components',
      current: false,
    },
    {
      name: 'Ant Design Playground',
      href: '/antd-playground',
      current: false,
    },
  ];
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex  flex-1 items-center justify-center sm:items-stretch ">
              <div className="flex shrink-0 items-center text-white font-semibold underline">
                Form Builder
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                  {menu.map((item) => (
                    <LinkItem key={item.name} item={item} />
                  ))}
                  {/* <a
                    href="#"
                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    aria-current="page"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Calendar
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
