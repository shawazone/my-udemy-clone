'use client'
import React, { useState } from 'react'
import Inputs from '../components/Inputs/Inputs'
import Button from '../components/Button'

export default function page() {


  const [state, setState] = useState()
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  }
  return (
    <div className='flex justify-center'>
        <form className='w-[600px] h-[700px] py-12 flex-col items-center gap-4'>
          <div className='w-[500px]'>
             {/* cloudinary */}
          </div>

          <div className='flex flex-col gap-2 py-4'>
            <Inputs big placeholder='Course name ' id='name' type='text' value={state.name} name='name' onChange={handleChange} textarea={false}></Inputs>
            <Inputs big placeholder='Author ' id='author' type='text' value={state.author} name='author' onChange={handleChange} textarea={false}></Inputs>
            <Inputs big placeholder='Description ' id='description' type='text' value={state.description} name='description' onChange={handleChange} textarea={false}></Inputs>
            <Inputs big placeholder='Price' id='price' type='text' value={state.price} name='price' onChange={handleChange} textarea={false}></Inputs>
           

          </div>

            <div>
              <Button></Button>
            </div>

        </form>
    </div>
  )
}
