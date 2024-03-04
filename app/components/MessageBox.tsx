"use client"

const MessageBox = () => {
    return (<>
        <div className="h-screen w-full">
            <div className=" h-full w-full bg-white overflow-hidden flex flex-col rounded-xl  shadow-xl"  >
                {/*  body */}
                <div className="h-full flex justify-between">
                    {/*  slidebar 1 */}
                    <div className="h-full w-[20%] border-r pt-10 px-5 hidden md:block">
                        <p className="text-xs font-medium text-gray-400">MAIN</p>
                        <div
                            className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-orange-500 group cursor-pointer flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 stroke-slate-400 mr-4 group-hover:stroke-orange-500" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Dashboard
                        </div>
                        <p className="text-xs font-medium text-gray-400 mt-8">APPLICATIONS</p>
                        <div
                            className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-orange-500 group cursor-pointer flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 stroke-slate-400 mr-4 group-hover:stroke-orange-500" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">

                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />

                            </svg>
                            Calender
                        </div>
                        <div className="mt-4 py-1.5 text-sm font-medium  text-orange-500 group cursor-pointer flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5   mr-4  stroke-orange-500" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">

                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />

                            </svg>
                            Messages
                        </div>
                        <div
                            className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-orange-500 group cursor-pointer flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 stroke-slate-400 mr-4 group-hover:stroke-orange-500" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">


                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />


                            </svg>
                            Contacts
                        </div>

                        <div
                            className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-orange-500 group cursor-pointer flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 stroke-slate-400 mr-4 group-hover:stroke-orange-500" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">

                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />

                            </svg>
                            Team Members
                        </div>

                        <div
                            className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-orange-500 group cursor-pointer flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 stroke-slate-400 mr-4 group-hover:stroke-orange-500" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">

                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                            Projects
                        </div>

                        <div
                            className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-orange-500 group cursor-pointer flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 stroke-slate-400 mr-4 group-hover:stroke-orange-500" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">

                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            Job Listing
                        </div>


                    </div>
                    {/*  sidebar 2 */}
                    <div className="h-full w-[30%] bg-slate-50 border-r md:flex flex-col hidden">
                        <div className="h-16 border-b px-4 flex items-center justify-center space-x-4">
                            <div className="px-4 py-4 border-b-4 border-b-orange-500">All</div>
                            <div className="px-4 py-4 ">Archived</div>
                        </div>
                        <div className="h-full">

                            <div
                                className="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                                <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500"
                                    className="h-12 w-12 border-2 border-white rounded-full" alt="" />
                                <div className="ml-4">
                                    <p x-text="user.name" className="text-md font-semibold text-slate-600 m-0 p-0">Yaroslav Zubkp
                                    </p>
                                    <p className="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">is is long ipsum
                                        avaliable...</p>
                                </div>
                            </div>

                            <div
                                className="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                                <img src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500 "
                                    className="h-12 w-12 border-2 border-white rounded-full" alt="" />
                                <div className="ml-4">
                                    <p x-text="user.name" className="text-md font-semibold text-slate-600 m-0 p-0"> Alison Alison
                                    </p>
                                    <p className="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">Hello</p>
                                </div>
                            </div>

                            <div
                                className="px-5 py-4   flex items-center bg-white cursor-pointer border-l-4 border-l-orange-500 border-t border-b">
                                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500 "
                                    className="h-12 w-12 border-2 border-white rounded-full" alt="" />
                                <div className="ml-4">
                                    <p x-text="user.name" className="text-md font-semibold text-slate-600 m-0 p-0"> Mircel Jones</p>
                                    <p className="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">Ok, Thanks.</p>
                                </div>
                            </div>

                            <div
                                className="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                                    className="h-12 w-12 border-2 border-white rounded-full" alt="" />
                                <div className="ml-4">
                                    <p x-text="user.name" className="text-md font-semibold text-slate-600 m-0 p-0">Uran Poland</p>
                                    <p className="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">We own hidden
                                        lake..</p>
                                </div>
                            </div>

                            <div
                                className="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                                <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500"
                                    className="h-12 w-12 border-2 border-white rounded-full" alt="" />
                                <div className="ml-4">
                                    <p x-text="user.name" className="text-md font-semibold text-slate-600 m-0 p-0">Yaroslav Zubkp
                                    </p>
                                    <p className="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">is is long ipsum
                                        avaliable...</p>
                                </div>
                            </div>

                            <div
                                className="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                                <img src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500 "
                                    className="h-12 w-12 border-2 border-white rounded-full" alt="" />
                                <div className="ml-4">
                                    <p x-text="user.name" className="text-md font-semibold text-slate-600 m-0 p-0"> Alison Alison
                                    </p>
                                    <p className="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">Hello</p>
                                </div>
                            </div>



                            {/*  else */}


                        </div>



                    </div>
                    <div className="w-full md:w-[50%] h-full flex flex-col">
                        <div className="h-16 border-b flex justify-between items-center w-full px-5 py-2 shadow-sm">
                            <div className="flex items-center">
                                <img className="h-10 w-10 overflow-hidden rounded-full"
                                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                                    alt="" />
                                <p className="font-semibold ml-3 text-slate-600">Mircel Jones</p>
                            </div>
                            <div className="flex items-center space-x-5">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="h-9 bg-slate-50 rounded-full stroke-slate-400 p-2" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>

                            </div>
                        </div>
                        <div className="h-full px-10 py-4">
                            {/*  message container */}
                            <div className="text-center  my-5">
                                <hr className="-mb-3" />
                                <span className="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">Wednesday, Feburary
                                    5</span>
                            </div>
                            {/*  messages */}
                            <div className="w-full flex flex-start overflow-y-auto">
                                <div className="w-1/2">
                                    <div className="flex items-center">
                                        <img className="h-5 w-5 overflow-hidden rounded-full"
                                            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                                            alt="" />
                                        <p className="font-semibold ml-3 text-sm text-slate-600">Mircel Jones <span
                                            className="text-slate-400 text-xs">3:21 PM</span></p>
                                    </div>

                                    <div className="mt-3 w-full bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                                        <p className=" text-sm text-slate-500">
                                            Hey all, <br />
                                            There are many variation of passages of Lorem ipsum avaliable, but the jority have alternation in some form , by injected humor, or randomise words which don't look even slightly believable.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*  me */}
                            <div className="w-full flex justify-end mt-3">
                                <div className="w-1/2 ">
                                    <div className="flex items-center justify-end">
                                        <p className="font-semibold mr-3 text-sm text-slate-600">Me <span
                                            className="text-slate-400 text-xs">3:25 PM</span></p>

                                        <img className="h-5 w-5 overflow-hidden rounded-full"
                                            src="https://source.unsplash.com/random/500x500/?face"
                                            alt="" />

                                    </div>

                                    <div className="mt-3 w-full bg-orange-500 p-4 rounded-b-xl rounded-tl-xl">
                                        <p className=" text-sm text-white">
                                            Hey, <br />
                                            we are own hidden lake forest which is netural lake are generaly found in mountain.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center  my-5">
                                <hr className="-mb-3" />
                                <span className="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">Today, 2:15 AM
                                    5</span>
                            </div>
                            {/*  messages */}
                            <div className="w-full flex flex-start">
                                <div className="w-1/2">
                                    <div className="flex items-center">
                                        <img className="h-5 w-5 overflow-hidden rounded-full"
                                            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                                            alt="" />
                                        <p className="font-semibold ml-3 text-sm text-slate-600">Mircel Jones <span
                                            className="text-slate-400 text-xs">3:21 PM</span></p>
                                    </div>

                                    <div className="mt-3  bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                                        <p className=" text-sm text-slate-500">
                                            ok, Thanks
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="  w-full  px-5 py-3">
                            <div
                                className="h-12 flex justify-between px-3 items-center border border-transparent bg-slate-50 focus-within:border-slate-300 rounded-lg">
                                <input type="text" className="w-full px-3 bg-transparent outline-none placeholder:text-slate-400"
                                    placeholder="Type your message" />
                                <div className="flex items-center space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 stroke-slate-300" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 stroke-slate-300" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>

                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default MessageBox;