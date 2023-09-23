"use client";
import { SafeUser } from "@/app/types";
import { Link } from "@chakra-ui/react";
import { User } from "@prisma/client";
import React, { useState } from "react";
import {signOut} from 'next-auth/react'
import { MdOutlineShoppingCart } from "react-icons/md";
import UserMenu from "./UserMenu";

interface UserMenuProps {
  myUser: SafeUser | null;
}

export default function Navbar({ myUser }: UserMenuProps) {

  const [UserMenuOpen , setUserMenuOpen] = useState(false);


  const closeUserMenu = () => {
    setUserMenuOpen(false)
  }


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
            <div className="absolute -right-1 -bottom-2 bg-blue-500 rounded-full w-6 h-6 flex justify-center items-center text-white ">69</div>
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
                <div className="flex ">
                     {/* <button className="py-1 px-2 border-black border-[1px]" onClick={()=>signOut()} >Log out</button> */}
                   <div onClick={() => setUserMenuOpen(prev =>!prev)} className="w-[40px] h-[40px] rounded-full bg-black flex  justify-center items-center text-white cursor-pointer mx-3" >
                        <span>{myUser.name.at(0)?.toUpperCase()}</span>
                        <span>{myUser.name.at(0)?.toUpperCase()}</span>
                   </div>
                </div>
                   
                   
               )}


               {UserMenuOpen && (
                <div className="absolute bottom-0 top-20 right-20 ">
                    <UserMenu
                    currentUser= {myUser}
                    closeUserMenu={closeUserMenu}
                    />
                </div>
               )}
           </div>
        </div>
      </div>
    </div>
  );
}
