
import Logo from '@/assets/logo-icon.png'
import Image from 'next/image';
import CategoriesLinks from './CategoriesLinks';
import User from './User';
import Link from 'next/link';

const Navbar = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    })

    return (
        <div>
            <div className="navbar flex justify-between bg-base-100 shadow-sm">
                <div className="flex items-center gap-3.5 ml-2">
                    <div>

                        <Image src={Logo} alt='কাঁচা বাজার logo' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <Link href={"/"}
                            className="btn btn-ghost text-xl">কাঁচা বাজার
                        </Link>
                        {date}
                    </div>
                </div>
                <User />
            </div>
            <CategoriesLinks />
        </div>
    );
};

export default Navbar;