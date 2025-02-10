'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export function LinkItem({
  item,
}: {
  item: { name: string; href: string; current: boolean };
}) {
  const pathName = usePathname();
  return (
    <Link
      key={item.name}
      href={item.href}
      className={`${
        item.href === pathName
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      } rounded-md px-3 py-2 text-sm font-medium `}
    >
      {item.name}
    </Link>
  );
}
