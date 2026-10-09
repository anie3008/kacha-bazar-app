import { ProductsType } from '@/types/types';

interface HighestPriceProductsProps {
    products :ProductsType[];
}
const HighestPriceProducts = ({products}:HighestPriceProductsProps) => {
    
    const sortedItems = [...products].sort((a, b) => b.change.pct - a.change.pct).slice(0,6);
    
    return (
       <div className="p-4 max-w-7xl mx-auto">
      
      <h1 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-1">
        <span className="text-red-600">▲</span>আজ দাম বেড়েছে
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedItems.map((product) => (
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
                className={`badge gap-1 p-2.5 font-semibold text-xs ${
                  product.change.dir === 'up' 
                    ? 'badge-error bg-red-100 text-red-700' 
                    : 'badge-success bg-green-100 text-green-700'
                }`}
              >
                {product.change.dir === 'up' ? '▲' : '▼'} {product.change.pct}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default HighestPriceProducts;