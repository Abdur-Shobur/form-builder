import React from 'react';
import { LinkItem } from './link-item';

export function Header() {
  const menu = [
    {
      name: 'Form Builder',
      href: '/',
      current: true,
    },
    {
      name: 'Components',
      href: '/components',
      current: false,
    },
    {
      name: 'Tailwind Playground',
      href: '/tailwind-playground',
      current: false,
    },
    {
      name: 'Ant Design Playground',
      href: '/antd-playground',
      current: false,
    },
    {
      name: 'Github',
      href: 'https://github.com/Abdur-Shobur/form-builder',
      current: false,
    },
  ];
  return (
    <div>
      <nav className="bg-gray-800 relative z-10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex  flex-1 items-center justify-center sm:items-stretch ">
              {/* <div className=""> */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-1 md:space-x-4">
                  {menu.map((item) => (
                    <LinkItem key={item.name} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
