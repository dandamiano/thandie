"use client"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react";
import { getURL } from "next/dist/shared/lib/utils";
import { useState } from "react";
import { BsDoorOpen, BsEnvelope } from "react-icons/bs"

const links = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'Services',
        url: '/services'
    },
    {
        name: 'Blogs',
        url: '/stories'
    },
    {
        name: 'About Us',
        url: '/about'
    }, {
        name: 'Contact Us',
        url: '/contacts'
    },
]

const Navbar = () => {
    const { data: session, status } = useSession()
    const [menuState, setMenuState] = useState(false)
    const [profileState, setProfileState] = useState(false)
    const url = getURL();

    return (
        <nav className="bg-orange-600 z-50 absolute w-full">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
                            onClick={() => { setMenuState(!menuState) }}
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            {/*
                                Icon when menu is closed.

                                Menu open: "hidden", Menu closed: "block"
          */}
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            {/*
                                Icon when menu is open.

                                Menu open: "block", Menu closed: "hidden"
          */}
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        {/* Header Logo */}
                        <div className="flex flex-shrink-0 items-center">
                            <h1 className="text-white text-2xl font-bold">Direct Insurance</h1>
                        </div>
                        {/* Navbar */}
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {
                                    links.map(link => (
                                        link.url === url ?
                                            <a href={link.url} className="bg-orange-500 text-white rounded-md px-3 py-2 text-sm font-medium">{link.name}</a >
                                            : <a href={link.url} className="text-gray-50 hover:bg-orange-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                {link.name}
                                            </a>

                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    {/* Profile */}
                    {status === "authenticated" ?
                        (<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" className="relative rounded-full bg-orange-500 p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </button>

                            {/* Profile dropdown */}
                            <div className="relative ml-3">
                                <div>
                                    <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true"
                                        onClick={() => { setProfileState(!profileState) }}
                                    >
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src="/src/img/dummy/avatar.jpg" alt="" />
                                    </button>
                                </div>
                                {
                                    profileState ?
                                        <div className="flex flex-col items-center absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" >
                                            <p className="text-sm w-11/12 overflow-hidden bg-orange-600 text-white rounded-md p-2">{session.user?.name}</p>
                                            {/* {Active: "bg-gray-100", Not Active: ""} */}
                                            <a href="/messages/" className="px-4 py-2 text-sm text-gray-700 flex items-center justify-between space-x-3 hover:bg-orange-500 hover:text-white rounded-md w-11/12" role="menuitem" id="user-menu-item-0">
                                                <div className="flex space-x-4 hover:text-white">
                                                    <BsEnvelope color={"rgb(251 146 60)"} size={20} />
                                                    <p>Messages</p>
                                                </div>
                                                <span className="bg-orange-400 text-xs font-bold rounded-full w-5 h-5 p-3 text-white text-center flex items-center justify-center">12</span>
                                            </a>

                                            <button onClick={() => signOut({ callbackUrl: "/" })} className="px-4 py-2 text-sm text-gray-700 flex items-center justify-between space-x-3 hover:bg-orange-500 hover:text-white rounded-md w-11/12" role="menuitem" id="user-menu-item-0">
                                                <div className="flex space-x-4 hover:text-white">
                                                    <BsDoorOpen color={"rgb(251 146 60)"} size={20} />
                                                    <p>Sign Out</p>
                                                </div>
                                            </button>

                                        </div> : null
                                }
                            </div>
                        </div>) : null
                    }
                </div>
            </div >

            {/* {/* Mobile menu, show/hide based on menu state. */}
            {
                menuState === true ?
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-50 hover:bg-orange-500 hover:text-white" */}
                            <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                            <a href="#" className="text-gray-50 hover:bg-orange-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                            <a href="#" className="text-gray-50 hover:bg-orange-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                            <a href="#" className="text-gray-50 hover:bg-orange-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                        </div>
                    </div> : null
            }
        </nav >
    );
}

export default Navbar;