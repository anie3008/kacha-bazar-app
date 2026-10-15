"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';


const User = () => {
    const {
        data: session, isPending
    } = authClient.useSession()

    if (isPending) return <div>Loading...</div>
    return (
        <div className="flex gap-3.5 mr-2.5">
            {session?.user ? (<div className="flex  flex-col items-center gap-3"> <span>স্বাগতম, <strong className='ml-2'>{session.user.name}</strong></span>

                <div>
                    <button onClick={() => authClient.signOut()} className="btn  btn-xs bg-[#228b22] text-white border-2 rounded-md p-3 sm:btn-sm md:btn-md lg:btn-lg"> সাইন আউট</button>

                    <Link href={"my-profile"}>
                        <button className="btn  btn-xs border-[#228b22] border-2 rounded-md p-3 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"> আমার প্রোফাইল </button>
                    </Link>

                </div>

            </div>) : (
                <div className='gap-3.5 mr-2.5'>

                    <Link href={"/sign-up"}>
                        <button className="btn btn-xs rounded-md p-3 border-2 border-[#b0fcb0] sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"> সাইন আপ </button>
                    </Link>


                    <Link href={"/sign-in"}>
                        <button className="btn  btn-xs border-2 bg-[#228b22] text-white *:rounded-md p-3 sm:btn-sm md:btn-md lg:btn-lg"> সাইন ইন</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default User;