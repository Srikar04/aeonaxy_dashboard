import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faHand, faMessage } from '@fortawesome/free-regular-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';


const top = () => {
    return (
        <div>
            <ul>
                <li>
                    <div className="flex items-center p-2 rounded-lg relative py-1 mb-2">
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
                    <div className="bg-gray-200 p-4 rounded-md w-full mb-2 py-2 text-xs">
                        <p className="font-bold mt-2">Your team used 8/50 free docs</p>
                        <p className="font-extralight ">Upgrade to create Unlimited docs</p>
                    </div>
                </li>
                <li>
                    <div className="flex items-center p-2 rounded-lg py-1 mb-1">
                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                        <p>Catch Up</p>
                    </div>
                </li>
                <li>
                    <div className="flex items-center px-2 rounded-lg mb-2 py-1 ">
                        <FontAwesomeIcon icon={faMessage} className="mr-2" />
                        <p>Discussion</p>
                    </div>
                </li>
                <li>
                    <div className="flex items-center px-2 py-1 mb-1">
                        <p className="text-xs font-bold">Favourites</p>
                    </div>
                </li>
                <li>
                    <div className="flex items-center px-2 rounded-lg ml-1">
                        <p>👋 Getting started</p>
                    </div>
                </li>
                <li>
                    <div className="flex items-center px-2 py-2.5 mb-1">
                        <p className="text-xs font-bold">My Channels</p>
                    </div>
                    <ul className="ml-4">
                        <li>
                            <div className="flex items-center px-2 mb-2 rounded-lg">
                                <FontAwesomeIcon icon={faCaretRight} className="mr-2" />
                                <p>My private channel</p>
                            </div>
                            <ul className="ml-4 bg-gray-300">
                                <li>
                                    <div className="flex items-center p-2 mb-2 rounded-xl">
                                        <p>👋 Getting started</p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="flex items-center px-2 mb-2 rounded-lg">
                                <FontAwesomeIcon icon={faCaretRight} className="mr-2" />
                                <p>Engineering</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center px-2 mb-2 rounded-lg">
                                <FontAwesomeIcon icon={faCaretRight} className="mr-2" />
                                <p>Product</p>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default top
