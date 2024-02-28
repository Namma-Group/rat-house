import { signOut } from 'next-auth/react';
import { RiLogoutBoxFill } from "react-icons/ri";
import { HiMiniBell } from "react-icons/hi2";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { RiUser5Fill } from "react-icons/ri";

import useCurrentUser from '@/hooks/useCurrentUser';

import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import SidebarTweetButton from './SidebarTweetButton';

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  const items = [
    {
      icon: BiSolidHomeAlt2,
      label: 'Home',
      href: '/',
    },
    {
      icon: HiMiniBell,
      label: 'Notifications',
      href: '/notifications',
      auth: true,
      alert: currentUser?.hasNotification
    },
    {
      icon: RiUser5Fill,
      label: 'Profile',
      href: `/users/${currentUser?.id}`,
      auth: true,
    },
  ]

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
        <div className="flex flex-col items-end">
          <div className="space-y-2 lg:w-[230px]">
            <SidebarLogo />
            {items.map((item) => (
              <SidebarItem
                key={item.href}
                alert={item.alert}
                auth={item.auth}
                href={item.href} 
                icon={item.icon} 
                label={item.label}
              />
            ))}
            {currentUser && <SidebarItem onClick={() => signOut()} icon={RiLogoutBoxFill} label="Logout" />}
            <SidebarTweetButton />
          </div>
        </div>
      </div>
  )
};

export default Sidebar;
