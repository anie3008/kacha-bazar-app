import SortDropdown from "@/Component/SortDropdown";
import { ProductsType } from "@/types/types";
import Link from "next/link";

interface ProductsCategoryProps {
  params: Promise<{
    slug: string;
  }>;

  searchParams: Promise<{
    sort: string;
  }>
};

const ProductsCategory = async ({ params, searchParams }: ProductsCategoryProps) => {
  const { slug } = await params;
  const { sort } = await searchParams;

  const response = await fetch(`https://openapi.programming-hero.com/api/bazardor/categories/${slug}`)
  const products = await response.json();

  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
 const data = await res.json();

  const categoryProducts = data.filter(
    (item: ProductsType) => item.category === products.slug);

     if (sort === "lowToHigh") {
    categoryProducts.sort((a: ProductsType, b: ProductsType) => Number(a.today) - Number(b.today));
  } else if (sort === "highToLow") {
    categoryProducts.sort((a: ProductsType, b: ProductsType) => Number(b.today) - Number(a.today));
  }

    
  return (
    <div>

             <ul className="space-y-2">
             <li className="p-4 border rounded border-base-200 m-4 shadow-sm">
              <div className="flex items-center gap-2">
                {products.icon}
              <div className=" flex flex-col items-start">
                <span className="font-semibold">{products.nameBn}</span>
              <span className="badge bg-base-200 text-xs px-2 py-1">
            <p>মোট {categoryProducts.length} টি পণ্যের আজকের দাম ও পরিবর্তন</p>

          </span>
              </div>
              </div>
              
            </li>
<ul className="space-y-2 flex justify-center sm:justify-end items-center">
            <SortDropdown currentSort={sort} />
</ul>
           
        
        </ul>

      {categoryProducts.length === 0 ? (
        <p className="text-gray-500">No products found in this category.</p>
      ) :
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryProducts.map((product:ProductsType) => (
            <Link href={`/product/${product.id}`} key={product.id}>
            <div
              className="card bg-base-200 border border-base-300 shadow-sm p-4 flex flex-col justify-between gap-3"
            >
              <div className="flex justify-between items-start gap-2">
                <div className="flex items-center gap-3">
                  <div className="avatar placeholder">
                    <div className="bg-base-200 text-neutral-content rounded-xl w-12 h-12 flex items-center justify-center">
                      {product.image}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg text-base-content">
                      {product.nameBn}
                    </h3>
                    <p className="text-xs text-base-content/70">{product.unit}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-base-300/50">
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-base-content/60 font-medium">আজকের দাম</span>
                  <p className="text-sm font-semibold text-primary">
                    {product.today} টাকা
                  </p>
                </div>
                <div
                  className={`badge gap-1 p-2.5 font-semibold text-xs ${product.change.dir === 'up'
                      ? 'badge-error bg-red-100 text-red-700'
                      : product.change.dir === 'down'
                        ? 'badge-success bg-green-100 text-green-700'
                        : 'badge-neutral bg-base-300 text-base-content'
                    }`}
                >
                  {product.change.dir !== 'flat' && (product.change.dir === 'up' ? '▲ ' : '▼ ')}
                  {product.change.pct}%
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      }
    </div>

  );
};

export default ProductsCategory;