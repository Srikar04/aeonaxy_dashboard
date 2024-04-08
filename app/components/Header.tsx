import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faEllipsisVertical, faFileLines, faLock } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';


const Header = () => {
    return (
        <div className="m-4 flex justify-between items-center">
            <div className='flex items-center space-x-4'>
                <FontAwesomeIcon icon={faFileLines} />
                <FontAwesomeIcon icon={faAngleLeft} className="opacity-10"  />
                <FontAwesomeIcon icon={faAngleRight} className="opacity-10" />
                <FontAwesomeIcon icon={faLock} />
                <div>My Private Channel /👋 Getting Started</div>
            </div>
            <div className="flex items-center space-x-4">
                <div>Share</div>
                <FontAwesomeIcon icon={faComment} />
                <div>⭐</div>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
        </div>
    )
}

export default Header
