import Link from 'next/link';
import  {CategoriesType}  from '@/types/types';
import { notFound } from 'next/navigation';

const CategoriesLinks = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/bazardor/categories")
   const data = await response.json();
   if (!data) {
        notFound();
    }

    return (
        <div className='flex justify-start gap-5 mt-4 mb-5'>
            {data.map((category : CategoriesType) => 
            <Link 
            className='hover:border-2 hover:border-green-600'
             href={`/category/${category.slug}`}key ={category.id}>
            {category.icon}
            {category.nameBn}
            </Link>
            )}
        </div>
    );
};

export default CategoriesLinks;