"use client"

import { getURL } from "next/dist/shared/lib/utils";
import Link from "next/link";
type linksType = {
    name: string;
    url: string;
    logo: JSX.Element
}[]

const links: linksType = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        logo: <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
    },
    // {
    //     name: 'Messages',
    //     url: '/messages',
    //     logo: <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    // },
    {
        name: 'Subscriptions',
        url: '/subscriptions',
        logo: <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    },
    {
        name: 'Claims',
        url: '/claims',
        logo: <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    },
    // {
    //     name: 'My Account',
    //     url: '/account',
    //     logo: <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    // },
]
const SideBar = () => {
    const url = getURL();
    return (
        <div className="h-full w-[20%] border-r pt-10 px-5 hidden md:block">
            <p className="text-lg font-bold mb-10  text-primary-500">Customer Portal</p>

            {
                links.map(link => (
                    url === link.url ?
                        <a href={link.url} className="mt-4 p-2 bg-primary-200 rounded-lg text-sm font-medium text-slate-500 hover:text-primary-500 group cursor-pointer flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 stroke-orange-400 mr-4 group-hover:stroke-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                {link.logo}
                            </svg>
                            {link.name}
                        </a> :
                        <a href={link.url} className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-primary-500 group cursor-pointer flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 stroke-slate-400 mr-4 group-hover:stroke-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                {link.logo}
                            </svg>
                            {link.name}
                        </a>
                ))
            }
        </div>
    );
}

export default SideBar;