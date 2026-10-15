import Link from 'next/link';
import { CategoriesType } from '@/types/types';
import { notFound } from 'next/navigation';
import NavLink from './NavLink';

const CategoriesLinks = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/bazardor/categories")
    const data = await response.json();
    if (!data) {
        notFound();
    }

    return (
        <div className='flex justify-start gap-5 mt-4 mb-5'>
            {data.map((category: CategoriesType) => (


                <NavLink key={category.id}
                    href={`/category/${category.slug}`} activeClassName='bg-green-50 border border-green-500 rounded-md text-green-700 px-2.5 py-2'>

                    {category.icon}
                    {category.nameBn}
                </NavLink>
            )
            )};
        </div>
    );
};

export default CategoriesLinks;