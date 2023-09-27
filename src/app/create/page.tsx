'use client'
import React, { ChangeEvent, useState } from 'react'
import Input from '../components/Inputs/Input'
import Button from '../components/Button'
import ImageUploader from '../components/Inputs/ImageUploader'

interface initialValue {
  name: string;
  imageSrc: string;
  author: string;
  description: string;
  price: number;
}



const initialValue:initialValue = {
  name: '',
  imageSrc: '',
  author: '',
  description: '',
  price: 0,
}

export default function page(initialValue: initialValue) {

  
  const [state, setState] = useState(initialValue)
  

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    setState({...state, [event.target.name]: event.target.value})
  }


  const setCustomValue = (id:any, value:any) => {
    setState((prevState) => ({
      ...prevState,
      [id] :value
    }))
  }


  return (
    <div className='flex justify-center'>
        <form className='w-[600px] h-[700px] py-12 flex-col items-center gap-4'>
          <div className='w-[500px]'>
          <ImageUploader value={state.imageSrc} onChange={(value) => setCustomValue('imageSrc',value)}/>
          </div>

          <div className='flex flex-col gap-2 py-4'>
            <Input big placeholder='Course name ' id='name' type='text' value={state.name} name='name' onChange={handleChange} textarea={false}></Input>
            <Input big placeholder='Author ' id='author' type='text' value={state.author} name='author' onChange={handleChange} textarea={false}></Input>
            <Input big placeholder='Description ' id='description' type='text' value={state.description} name='description' onChange={handleChange} textarea={false}></Input>
            <Input big placeholder='Price' id='price' type='text' value={state.price} name='price' onChange={handleChange} textarea={false}></Input>
           

          </div>

       
              <Button
              label='Submit'
              type='Submit'
              ></Button>
           

        </form>
    </div>
  )
}
