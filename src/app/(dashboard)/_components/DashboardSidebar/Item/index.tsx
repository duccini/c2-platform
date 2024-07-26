"use client";

import Link from "next/link";
import { ReactNode, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MenuItem } from "react-pro-sidebar";

type ItemProps = {
  icon: ReactNode;
  text: string;
  href: string;
  className?: string;
};

const Item = ({ icon, text, href, className }: ItemProps) => {
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setActive(pathname === href);
  }, [pathname, href]);

  return (
    <MenuItem
      active={active}
      icon={icon}
      className={className}
      component={<Link href={href} />}
    >
      {text}
    </MenuItem>
  );
};

export default Item;
