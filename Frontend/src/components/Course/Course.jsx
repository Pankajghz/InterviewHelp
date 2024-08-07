import React from 'react'

export default function Course({course, imgurl}) {
  return (
    <div className='h-[350px] mb-10 shadow shadow-lg min-w-[200px] w-[250px]'>
      <div className='h-[45%]  overflow-hidden bg-gray-100 flex items-center justify-center'>
         <img src={imgurl} alt={course} className='w-full' />
      </div>
      <div className='px-2 py-1 flex flex-col'>
        <h1 className='font-bold text-lg'>{course}</h1>
        <span className='bg-orange-500 rounded-full h-9 text-white flex items-center justify-center font-bold mt-20'>Explore now</span>
      </div>
    </div>
  )
}
