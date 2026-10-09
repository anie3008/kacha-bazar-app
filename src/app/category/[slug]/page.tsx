import { ProductsType } from "@/types/types";

interface ProductsCategoryProps {
  params: Promise<{
    slug: string;
  }>;
};

const ProductsCategory = async ({ params }: ProductsCategoryProps) => {
  const { slug } = await params;

  const response = await fetch(`https://api.api-store.workers.dev/api/bazardor/categories/${slug}`)
  const products = await response.json();

  const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
  const data = await res.json();

  const categoryProducts = data.filter(
    (item: ProductsType) => item.category === products.slug);
  ;
  return (
    <div>

      {/* <div><h1>{categoryProducts.nameBn}</h1></div>

      <div><h1>sorting section</h1></div> */}

      {categoryProducts.length === 0 ? (
        <p className="text-gray-500">No products found in this category.</p>
      ) :
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryProducts.map((product) => (
            <div
              key={product.id}
              className="card bg-base-200 border border-base-300 shadow-sm p-4 flex flex-col justify-between gap-3"
            >
              <div className="flex justify-between items-start gap-2">
                <div className="flex items-center gap-3">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-xl w-12 h-12 flex items-center justify-center">
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
          ))}
        </div>
      }
    </div>

  );
};

export default ProductsCategory;