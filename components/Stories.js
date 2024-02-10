"use client"

import React, {useEffect, useState} from 'react'
import { faker } from '@faker-js/faker';


function Stories() {

  const [suggestions, setSuggestions] = useState([])
   
   useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
        
        id: i,
        username: faker.internet.userName(),
        avatar: faker.image.avatar()
    }))

    console.log(suggestions)
    setSuggestions(suggestions)
   }, [])

  return (
    <div className='flex space-x-2 bg-white mt-8 border border-gray-200 rounded-sm overflow-x-scroll'>
        {
          suggestions.map((profile) => {
               return (
                <div className='flex flex-col'>
                  <img src={profile.avatar} alt="" className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110"/>
                  <p>{profile.username}</p>
                </div>
               )
          })
        }
    </div>
  )
}

export default Stories