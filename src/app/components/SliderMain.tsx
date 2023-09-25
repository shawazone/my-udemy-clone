'use client'
import { useState } from 'react'
import {BsArrowLeft, BsArrowRight} from "react-icons/bs"
import React from 'react'


interface CarouselProps{
    images:string[];
}

function SliderMain({images}:CarouselProps) {
const [current,setCurrent] = useState(0)



const currentImage  = images[current]


const prevImage = () => {
  const isFirstSlide = current === 0;
  const nexIndex = isFirstSlide ? images.length - 1 : current - 1;
  setCurrent(nexIndex);
}

  return (
    <div className='relative pb-16'>
        <div>
        <button onClick={prevImage} className='absolute left-[2%] top-[50%] z-[40]'><BsArrowLeft/></button>
           <img src={currentImage} alt={`image ${current +1}`} className='h-[500px] object-cover w-full'/> 
        {current === 1 &&(
            <div className=' absolute top-[20%] let-[5%] bg-white p-6 maw-w-[450px]'>
              <h1 className='my-4 test-[1.2rem] font-bold'>Learning that gets you</h1>
              <h4 className='text-[1.2rem]'>Skills for your present (and your future). get started with us. </h4>
            </div>
        )}

         {current === 0 &&(
            <div className=' absolute top-[20%] let-[5%] bg-white p-6 maw-w-[450px]'>
              <h1 className='my-4 test-[1.2rem] font-bold'>uUnblock the power of your people</h1>
              <h4 className='text-[1.2rem]'>Udemy Buisness is trusted by ................. </h4>
            </div>
        )}


        </div>
      </div>
  )
}

export default SliderMain
