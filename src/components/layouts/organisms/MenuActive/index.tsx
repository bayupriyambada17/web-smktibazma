import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react'

interface MenuActiveProps {
  href: string;
  children: React.ReactNode;
}

const MenuActive: FC<MenuActiveProps> = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <div>
      <Link href={href} className=''>{children}</Link>
    </div>
  )
}

export default MenuActive;