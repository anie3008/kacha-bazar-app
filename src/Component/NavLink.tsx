"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';

interface NavLinkProps extends ComponentProps<typeof Link> {
    activeClassName?: string;
    inactiveClassName?: string;
}

const NavLink = ({
    href,
    children,
    className = "",
    activeClassName = "text-blue-600 font-bold", // Default active styles (Tailwind example)
    inactiveClassName = "text-gray-600",         // Default inactive styles
    ...props
}: NavLinkProps) => {
    const pathName = usePathname()
    const isActive = pathName === href
    const combinedClassName = `${className} ${isActive ? activeClassName : inactiveClassName}`.trim();
    return (
        <Link href={href} className={combinedClassName} {...props}>
            {children}
        </Link>
    );
};

export default NavLink;