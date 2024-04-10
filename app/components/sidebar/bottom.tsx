import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxArchive, faCircleHalfStroke, faShareNodes, faUserPlus } from '@fortawesome/free-solid-svg-icons';


const bottom = () => {
    return (
        <div className="flex flex-col justify-end">
            <ul className='text-sm flex-grow'>
                <li>
                    <div className="flex items-center mb-3 rounded-lg">
                        <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                        <p>Add people</p>
                    </div>
                </li>
                <li>
                    <div className="flex items-center mb-3 rounded-lg">
                        <FontAwesomeIcon icon={faCircleHalfStroke} className="mr-2" />
                        <p>Templates</p>
                    </div>
                </li>
                <li>
                    <div className="flex items-center mb-3 rounded-lg">
                        <FontAwesomeIcon icon={faShareNodes} className="mr-2" />
                        <p>Shared with me</p>
                    </div>
                </li>
                <li>
                    <div className="flex items-center mb-3 rounded-lg">
                        <FontAwesomeIcon icon={faBoxArchive} className="mr-2" />
                        <p>Archive</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default bottom
