'use client'
import React from 'react'

import Sidebar from './components/sidebar/main'

import Notification from './components/Notification';
import Header from './components/Header';
import Content from './components/Content';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

const page = () => {
  return (
    <div className="flex flex-col h-screen">
      <Notification />
      <div className="flex">
        <div className="relative w-80">
          <Sidebar />
        </div>
        <div className="w-full flex flex-col">
          <Header />
          <Content />
        </div>
        <div className="flex flex-col justify-end mt-auto p-5 space-y-2 h-full">
          <FontAwesomeIcon icon={faMoon} />
          <div className="relative bg-blue-100 p-3 rounded">
            <FontAwesomeIcon className="text-blue-500"icon={faQuestion} />
            <div className='absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;
