"use client";
import { SafeUser } from "@/app/types";
import { Link } from "@chakra-ui/react";
import { User } from "@prisma/client";
import React from "react";
import {signOut} from 'next-auth/react'
import { MdOutlineShoppingCart } from "react-icons/md";

interface UserMenuProps {
  myUser: SafeUser | null;
}

export default function Navbar({ myUser }: UserMenuProps) {
  return (
    <div className="shadow-xl bg-white z-[1] sticky px-2">
      <div className=" flex items-center justify-between gap-2">
        <div className="flex items-center gap-6 flex-1 relative">
          <Link href='/'>
            <img src="/logo.svg" alt="Logo" width={91} height={34}></img>
          </Link>

          <form className="lg: flex-1 lg:flex hidden ">
            <input
              type="text"
              className="w-full p-3 font-light bg-white rounded-full border-black border-[1px] outline-none"
            />
          </form>
        </div>

        <div className="items-center gap-4 text-[.8rem] px-2 hidden lg:flex">
          <div>
            <Link href="/">Udemy Buisnes</Link>
          </div>

          <div>
            <Link href="/">Teach on Udemy</Link>
          </div>

          <div className="relative">
            <Link href="/">
              {" "}
              <MdOutlineShoppingCart className="h-6 w-10"></MdOutlineShoppingCart>
            </Link>
            <div>69</div>
          </div>
        </div>

        <div>
           <div  className=" flex itmes-center gap-3"> 
               {!myUser && (
                     <>
                        <div>
                           <button> <Link href='/login' className="py-2 px-6 border-black border-[1px]">Login</Link></button>
                        </div>
                        <div>
                        <Link href='/register' className="py-2 px-6 border-black border-[1px]">Sign up</Link>
                        </div>
                     </>

               )}

               {myUser && (
                   <div className="w-[40px] h-[40px] rounded-full bg-black flex-center justify-center text-white cursor-pointer">
                        <span>{myUser.name.at(0)?.toUpperCase()}</span>
                        <span>{myUser.name.at(0)?.toUpperCase()}</span>
                        <button className="py-2 px-6 border-black border-[1px]" onClick={()=>signOut()} >Log out</button>
                   </div>
                   
                   
               )}
           </div>
        </div>
      </div>
    </div>
  );
}
