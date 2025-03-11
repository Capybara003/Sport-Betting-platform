"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { IoHomeOutline, IoArchiveOutline, IoSettingsOutline } from "react-icons/io5";
import { BsGift } from "react-icons/bs";

// Map of links to display in the side navigation.
const links = [
  { name: 'Home', href: '/', icon: IoHomeOutline },
  { name: 'Football', href: '/dashboard/Football', icon: IoArchiveOutline },
  { name: 'HotOdds', href: '/dashboard/HotOdds', icon: IoArchiveOutline },
  { name: 'Profile', href: '/dashboard/Profile', icon: IoSettingsOutline },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center text-white justify-center gap-2 rounded-md bg-[#1d001b] p-3 text-sm font-medium hover:bg-[#7f0376] hover:text-gray md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-[#7f0376] text-white': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}