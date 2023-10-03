import React from 'react'
import Image from 'next/image'


export default function CourseComponent(data) {
  return (
    <div className='pt-4' key={key}>
        <div className='flex flex-col w-[300px] p-2 relative'>
            <div className='cursor-pointer hover:opacity-80'>
                <div className='border-[40px] border-yellow-400 relative'>
                    <Image src={data.imageSrc} alt='image' width={200} height={200}
                    className='object-cover w-[320px] h-[150px]'
                    ></Image>

                </div>
                
                <div className='p-1'>
                    <h3 className='text-'>{date.name}</h3>
                </div>


            </div>
        </div>
      
    </div>
  )
}
