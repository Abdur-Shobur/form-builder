import React from 'react';
import { LinkItem } from './link-item';
import Link from 'next/link';

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
      name: 'tailwind Playground',
      href: '/tailwind-playground',
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
      <nav className="bg-gray-800 relative z-10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex  flex-1 items-center justify-center sm:items-stretch ">
              <div className="flex shrink-0 items-center text-white font-semibold underline">
                Form Builder
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {menu.map((item) => (
                    <LinkItem key={item.name} item={item} />
                  ))}
                  <Link
                    className="absolute right-2 top-5 text-white font-semibold underline"
                    href={`https://github.com/Abdur-Shobur/form-builder`}
                    target="_blank"
                  >
                    Github
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
