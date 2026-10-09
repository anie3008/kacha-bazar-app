
import BannerImage from "@/assets/bazar-hero.png"
import Image from 'next/image';

const Banner = () => {
    const date = new Date ().toLocaleDateString("bn-BD",{
    dateStyle: "full"
})
    return (
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center bg-[#e8fae8] rounded-lg container mx-auto ">
            <div className="text-center sm:text-start ml-4">
                <div className="badge bg-[#c6e8c6] mt-2 mb-2 p-2">{date}</div>

<h1 className="text-4xl font-extrabold mt-2 mb-2 ">আজকের বাজারের দাম এক নজরে</h1>

<p className="mt-2 mb-2">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন <br />-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
<button className="btn  btn-xs bg-[#228b22] text-white border-2 rounded-md p-3 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"> সব পণ্য দেখুন </button>
            </div>
            <div>
                <Image src={BannerImage } alt='Banner Image' />
                </div>
        </div>
    );
};

export default Banner;