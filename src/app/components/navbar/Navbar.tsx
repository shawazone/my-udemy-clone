'use client'
import { SafeUser } from '@/app/types';
import { Link } from '@chakra-ui/react'
import { User } from '@prisma/client'
import React from 'react'

interface UserMenuProps {
  myUser: SafeUser | null;
}


export default function Navbar({myUser}: UserMenuProps) {
  return (
    <div className='shadow-xl bg-white z-[-9999] sticky px-2'>
        <div className=' flex items-center justify-between gap-2'>
            <div className='flex items-center gap-6 flex-1 relative'>
                 <Link href='/'><img src="/logo.svg" alt='Logo' width={91} height={34}></img></Link>

                 <form className='lg: flex-1 lg:flex hidden '>
                    <input type="text"
                    className='w-full p-3 font-light bg-white rounded-full border-black border-[1px] outline-none'
                    />
                 </form>
            </div>

           <div className='items-center gap-4 text-[.8rem] px-2 hidden lg:flex'>
              <div>
                <Link href='/'>Udemy Buisnes</Link>
              </div>

              <div>
                <Link href='/'>Teach on Udemy</Link>
              </div>
        </div>



        </div>
      
    </div>
  )
}
