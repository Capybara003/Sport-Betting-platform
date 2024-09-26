"use client"


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { IoHomeOutline, IoArchiveOutline  } from "react-icons/io5";
import { PiUserLight, PiUsersThree } from "react-icons/pi";
import { BsGift } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";




// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Main Categories', href: '', icon: IoHomeOutline },
  {
    name: 'Football', href: '/dashboard/Football ', icon: IoArchiveOutline
  },
  {
    name: 'Crypto Price Betting', href: '/dashboard/Crypto', icon: BsGift 
  },
  {
    name: 'Profile', href: '/dashboard/Profile', icon: IoSettingsOutline
  },
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
            // clsx library introduced in the chapter on CSS styling to conditionally apply class names when active
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