import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBell } from '@fortawesome/free-solid-svg-icons';

const Notification = () => {
    return (
        <div className="relative top-0 left-0 w-full p-2 bg-blue-500 text-white flex justify-between items-center z-10">
            <div className="flex-1 items-center">
                <p className="text-center text-xs">Enable browser notifications to avoid missing on important activity.</p>
            </div>
            <div className="flex items-center">
                <button className="mr-4 bg-white text-blue-500 px-2 py-1 rounded flex items-center text-xs">
                    <FontAwesomeIcon icon={faBell} className="mr-2" />
                    Enable Notifications
                </button>
                <FontAwesomeIcon icon={faTimes} className="cursor-pointer" />
            </div>
        </div>
    );
};

export default Notification;