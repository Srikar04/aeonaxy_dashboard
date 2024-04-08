'use client'
import React from 'react'
import Sidebar from './components/sidebar'
import Notification from './components/Notification';
import Header from './components/Header';

const page = () => {
  return (
    <div>
      <Notification />
      <div className="flex">
        <div className="relative w-64">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Header />
          <div className="p-4">
            <p>Some content to show...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;
