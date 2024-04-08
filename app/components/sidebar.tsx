import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faClock, faHand, faMessage } from '@fortawesome/free-regular-svg-icons'
import { faBoxArchive, faCaretRight, faCircleHalfStroke, faShareNodes, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <div>
                <button onClick={toggleSidebar} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
            </div>
            <aside id="logo-sidebar"
                className={`relative top-0 left-0 w-70 h-screen transition-transform -translate-x-full sm:translate-x-0`}
                aria-label="Sidebar">
                <div className="h-full px-3 py-4 sm:w-70 overflow-y-auto bg-gray-50 dark:bg-gray-800 text-xs">
                    <a href="https://flowbite.com/" className="flex justify-between items-center ps-2.5 mb-1 py-1">
                        <div className="flex items-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
                            <span className="self-center text-xs font-semibold whitespace-nowrap dark:text-white">refero team</span>
                        </div>
                        <FontAwesomeIcon icon={faBell} />
                    </a>
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <ul>
                                <li>
                                    <div className="flex items-center p-2 rounded-lg relative py-1 mb-1">
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5">
                                            <FontAwesomeIcon icon={faHand} />
                                        </div>
                                        <input type="text" placeholder="Ask Your AI assistant" className="flex-grow p-2 pl-8 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" />
                                        <div className="ms-3">
                                            <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M10 4a6 6 0 1 0 0 12a6 6 0 0 0 0-12zm0 10a4 4 0 1 1 0-8a4 4 0 0 1 0 8zm6 2l4 4l-1.414 1.414L15.586 16H15v-.586l1-1z" />
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="bg-gray-200 p-4 rounded-md w-full mb-2 py-1 text-xs">
                                        <p className="font-bold mt-2">Your team used 8/50 free docs</p>
                                        <p className="font-extralight ">Upgrade to create Unlimited docs</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded-lg py-1 mb-0.5">
                                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                                        <p>Catch Up</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded-lg mb-1.5 py-1 ">
                                        <FontAwesomeIcon icon={faMessage} className="mr-2" />
                                        <p>Discussion</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 py-1 mb-0.5">
                                        <p className="text-xs font-bold">Favourites</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded-lg ml-1">
                                        <p>👋 Getting started</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 py-1 mb-0.5">
                                        <p className="text-xs font-bold">My Channels</p>
                                    </div>
                                    <ul className="ml-4">
                                        <li>
                                            <div className="flex items-center p-2 rounded-lg">
                                                <FontAwesomeIcon icon={faCaretRight} className="mr-2" />
                                                <p>My private channel</p>
                                            </div>
                                            <ul className="ml-4 bg-gray-300">
                                                <li>
                                                    <div className="flex items-center p-2 rounded-lg">
                                                        <p>👋 Getting started</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="flex items-center p-2 rounded-lg">
                                                <FontAwesomeIcon icon={faCaretRight} className="mr-2" />
                                                <p>Engineering</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center p-2 rounded-lg">
                                                <FontAwesomeIcon icon={faCaretRight} className="mr-2" />
                                                <p>Product</p>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex flex-col justify-end">
                                <ul className='text-xs space-y-0.5'>
                                    <li>
                                        <div className="flex items-center p-2 rounded-lg">
                                            <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                                            <p>Add people</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded-lg">
                                            <FontAwesomeIcon icon={faCircleHalfStroke} className="mr-2" />
                                            <p>Templates</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded-lg">
                                            <FontAwesomeIcon icon={faShareNodes} className="mr-2" />
                                            <p>Shared with me</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded-lg">
                                            <FontAwesomeIcon icon={faBoxArchive} className="mr-2" />
                                            <p>Archive</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </aside >
        </div >
    );
}

export default sidebar
