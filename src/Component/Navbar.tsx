
import Logo from '@/assets/logo-icon.png'
import Image from 'next/image';
import CategoriesLinks from './CategoriesLinks';

const Navbar = () => {
const date = new Date ().toLocaleDateString("bn-BD",{
    dateStyle: "full"
})

    return (
        <div>
            <div className="navbar flex justify-between bg-base-100 shadow-sm">
  <div className="flex items-center gap-3.5 ml-2">
<div>
    <Image src={Logo} alt='কাঁচা বাজার logo'/>
</div>
    <div className='flex flex-col justify-center'>
        <a className="btn btn-ghost text-xl">কাঁচা বাজার</a>
    {date}
    </div>
  </div>
  <div className="flex gap-3.5 mr-2.5">
    <button className="btn  btn-xs bg-[#228b22] text-white border-2 rounded-md p-3 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"> সাইন ইন </button>
    <button className="btn btn-xs rounded-md p-3 border-2 border-[#b0fcb0] sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"> সাইন আপ </button>
  </div>
</div>
<CategoriesLinks />
        </div>
    );
};

export default Navbar;