'use client'
import React, { useState }  from 'react';
import { FormEvent } from 'react';
import Inputs from '../components/Inputs/Inputs';


const initalState = {
  name: '',
  email: '',
  password: ''
}


export default function page()  {
const [state,setState] = useState(initalState)


function handleChange (event: any) {
 setState ({...state , [event.target.name]: event.target.value})
}

  return (
 <form className='text-center'>
     <div className=' flex flex-col justify-center  h-[450px] w-[350px] mx-auto gap-2 '>
       <Inputs placeholder='Name' id='name' type='text' name='name' onChange={handleChange} value={state.name}/>
       <Inputs placeholder='Email' id='email' type='text' name='email' onChange={handleChange} value={state.name}/>
       <Inputs placeholder='Password' id='password' type='password' name='password' onChange={handleChange} value={state.name}/>
     
      <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Register</button>
      </div>
 </form>
  )
}


