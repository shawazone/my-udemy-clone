'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react'
import Input from '../components/Inputs/Input'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

// import Button from '../(components)/Button'
// import { toast } from 'react-hot-toast'


interface InitialStateProps {
    name:string,
    email:string,
    password:string
}

const initialState:InitialStateProps = {
    name:'',
    email:'',
    password:''
}

export default function page() {
    const [state,setState] = useState(initialState)
    const [loading,setLoading] = useState(false)
    const router = useRouter();

    function handleChange(event:ChangeEvent<HTMLInputElement>) {
        setState({...state, [event.target.name]: event.target.value})
    }

    function onSubmit(event:FormEvent) {
        setLoading(true)
        event.preventDefault();
      

        axios.post('/api/register',state)
        .then(() => {
            // toast.success("Registered")
            router.refresh()
        })
        .then(() => {
            setTimeout(() => {
                router.push('/login')
            },2500)

        })

        .catch((error:any) => {
            throw new Error(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }

  return (
    <form onSubmit={onSubmit} className='text-center'>
        <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
        <Input placeholder='Name' id='name' type='text' name='name' onChange={handleChange} value={state.name} textarea={false} big={false}/>
        <Input placeholder='Email' id='email' type='email' name='email' onChange={handleChange} value={state.email} textarea={false} big={false}/>
        <Input placeholder='Password' id='password' type='password' name='password' onChange={handleChange} value={state.password} textarea={false} big={false}/>
         <div className=' flex justify-center items-center'>

        <button type='submit'  disabled={loading}  className=' text-gray-100 bg-blue-600 w-20 h-8'  >submit</button>
         </div>

        <div>
            <div>Do you have an account ? <Link  href='/login'  className=' text-blue-600'>Sign in</Link></div>
        </div>
        </div>
    </form>
  )
}