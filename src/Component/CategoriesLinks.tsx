import Link from 'next/link';
import  {CategoriesType}  from '@/types/types';

const CategoriesLinks = async () => {
    const response = await fetch("https://api.api-store.workers.dev/api/bazardor/categories")
    const data = await response.json()

    return (
        <div className='flex justify-start gap-5 mt-4 mb-5'>
            {data.map((category : CategoriesType) => 
            <Link key ={category.id} href={`/category/${category.slug}`}>
            {category.icon}
            {category.nameBn}
            </Link>
            )}
        </div>
    );
};

export default CategoriesLinks;