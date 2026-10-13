"use client" 
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';


const User = () => {
  const { 
        data: session, 
    } = authClient.useSession() 

console.log(session);
    return (
        <div className="flex gap-3.5 mr-2.5">
            <div className='gap-3.5 mr-2.5'>
   
    <Link href={"sign-up"}>
     <button className="btn btn-xs rounded-md p-3 border-2 border-[#b0fcb0] sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"> সাইন আপ </button>
    </Link>
    
    <Link href={"sign-in"}>
<button className="btn  btn-xs bg-[#228b22] text-white border-2 rounded-md p-3 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"> সাইন ইন </button>
    </Link>
  </div>
        </div>
    );
};

export default User;