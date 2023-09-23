'use client'
import { useState } from 'react'
import {BsArrowLeft, BsArrowRight} from "react-icons/bs"
import React from 'react'


interface CarouselProps{
    images:string[];
}

function SliderMain() {
  return (
    <div>
        <button className='absolute left-[2%] top-[50%] z-[40]'><BsArrowLeft/></button>
      </div>
  )
}

export default SliderMain
