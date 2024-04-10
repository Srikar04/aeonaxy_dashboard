'use client'

import React from 'react'
import docsImage from './docs.jpg';
import Image from 'next/image';



const Content = () => {
    return (
        <div className="p-2 flex-grow mx-40 text-left">
            <div className='font-extrabold text-3xl'>Getting started</div>
            <div className='flex flex-row  bg-gray-100 m-2 rounded-lg'>
                <div className='m-2'>🔒</div>
                <div className='flex-grow text-sm m-2'>
                    This doc is in <span className='font-bold'>private channel</span>, where you store your private work.
                    You can share this doc with your team members by inviting them to the channel.
                    To properly organize your work, you can use <span className='font-bold'>workspace channels</span> .
                    <div><br /></div>
                    You can make channels <span className='font-bold'>public</span> to make all docs visible to everyone on the team, or
                    <span className='font-bold'> private</span> if you want to restrict access to only selected members.
                </div>
            </div>
            <div>
                <br />
                <br />
            </div>
            <div>
                <div className="text-xl font-bold">Collaborate with your team with these three features</div>
                <div className="text-lg p-2 font-medium">✍️ Docs</div>
                <Image src={docsImage.src} alt="docs" height="300" width="300" /></div>
                <input type="text" placeholder="💡 Give it a go by typing / below" className=" my-2 p-2 bg-gray-200 rounded w-full" />
        </div>
    )
}

export default Content
