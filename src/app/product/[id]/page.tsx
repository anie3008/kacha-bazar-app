import { MarketDetails, ProductsType } from '@/types/types';
import { notFound } from 'next/navigation';

interface ProductDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
};


const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
    const { id } = await params
    const response = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${id}`)

    const data = await response.json();
    if (!data || !data.id) {
        notFound();
    }
    const markets:MarketDetails[] = data.markets
    const highestPriceMarket = markets && markets.length > 0 
        ? markets.reduce<MarketDetails>((maxMarket, currentMarket) => 
            currentMarket.max > maxMarket.max ? currentMarket : maxMarket, 
            markets[0]
          )
        : null;

        const lowestPriceMarket = markets && markets.length > 0 
        ? markets.reduce<MarketDetails>((minMarket, currentMarket) => 
            currentMarket.max < minMarket.max ? currentMarket : minMarket, 
            markets[0]
          )
        : null;

    return (
        <div>
            <div>
  <ul className="space-y-2">
    <li className="p-4 border rounded border-base-200 flex justify-between items-center m-4 shadow-sm">
      <div className="flex items-center gap-2">
        {data.image}
        <div className="flex flex-col items-start">
          <p className="font-semibold px-2">{data.nameBn}</p>
          {/* FIX: Changed <span> to <div> to safely house the <p> tag */}
          <div className="bg-base-200 text-xs px-2 py-1">
            <p> গতকালের তুলনায় আজ দাম বেড়েছে ({data.today - data.yesterday}) টাকা</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p>আজকের দাম</p>
      
        <span className="text-xl font-bold">
          {data.today}
        </span>
        <p>টাকা / কেজি</p>

        <div
          className={`badge gap-1 p-2.5 font-semibold text-xs ${
            data.change.dir === 'up'
              ? 'badge-error bg-red-100 text-red-700'
              : data.change.dir === 'down'
              ? 'badge-success bg-green-100 text-green-700'
              : 'badge-neutral bg-base-300 text-base-content'
          }`}
        >
          {data.change.dir !== 'flat' && (data.change.dir === 'up' ? '▲ ' : '▼ ')}
          {data.change.pct}%
        </div>
      </div>
    </li>
  </ul>
</div>


<div>
     <div className="w-full max-w-4xl mx-auto p-4">
  {/* শিরোনাম */}
  <h1 className="text-xl font-bold mb-6 text-left">দামের সারসংক্ষেপ</h1> 
  
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left"> 
    
    <div className="border-b md:border-b-0 md:border-r border-base-content/10 pb-4 md:pb-0 md:pr-4"> 
      <p className="text-lg font-bold text-base-content/60">সর্বনিম্ন মূল্য</p> 
      <p className="text-2xl font-black text-error my-1"> 
        {lowestPriceMarket?.max} <span className="text-xs font-normal text-base-content/70">টাকা / কেজি</span> 
      </p> 
      <p className="text-xs text-base-content/50"> 
        সর্বনিম্ন ছিল : {lowestPriceMarket?.market} 
      </p> 
    </div> 

    <div className="border-b md:border-b-0 md:border-r border-base-content/10 pb-4 md:pb-0 md:px-4"> 
      <p className="text-lg font-bold text-base-content/60">সর্বোচ্চ মূল্য</p> 
      <p className="text-2xl font-black text-error my-1"> 
        {highestPriceMarket?.max} <span className="text-xs font-normal text-base-content/70">টাকা / কেজি</span> 
      </p> 
      <p className="text-xs text-base-content/50"> 
        সর্বনিম্ন ছিল: {highestPriceMarket?.market} {highestPriceMarket?.min} টাকা 
      </p> 
    </div> 


    <div className="md:pl-4"> 
      <p className="text-lg font-bold text-base-content/60">গড় দাম</p> 
      <p className="text-2xl font-black text-error my-1"> 
        {(Number(highestPriceMarket?.max)+Number(lowestPriceMarket?.max??0))/2} <span className="text-xs font-normal text-base-content/70">টাকা </span> 
      </p> 
      <p className="text-xs text-base-content/50"> 
        প্রতি কেজি-এর হিসাবে টাকা 
      </p> 
    </div> 
    
  </div> 
</div>

     
     <div className="border border-base-200 rounded-xl overflow-hidden bg-base-100 shadow-sm">
        <div className="p-4 border-b border-base-200 bg-base-200/30 flex justify-between items-center">
          <h2 className="font-bold text-md text-base-content"> সকল বাজারের তালিকা</h2>
          <span className="text-xs text-base-content/60">পণ্য: <span className="font-semibold text-base-content">{data.nameBn}</span></span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="table w-full text-left">
            <thead>
              <tr className="bg-base-200/50 text-base-content/70">
                <th className="w-12 text-center">#</th>
                <th className="w-24">বাজারের নাম</th>
                <th className="w-24">বিভাগ</th>
                <th className="w-24">সর্বনিম্ন</th>
                <th className="w-24">সর্বাধিক</th>
                <th className="w-24">গড়</th>
              </tr>
            </thead>
            <tbody>
              
              {(markets??[]).map ((market:MarketDetails, idx:number) => {
                return (
                  <tr key={idx} className={`bg-red-50/30 `}>
                    <td className="text-center font-medium text-base-content/50">{idx + 1}</td>
                    <td>
                      <span className="font-semibold text-base-content">{market.market}</span>
                    </td>
                    <td>
                      <span className="font-semibold text-base-content">{market.division}</span>
                    </td>
                    
                      <td>
                      <span className="font-semibold text-base-content">{market.max}</span>
                    </td>
                      <td>
                      <span className="font-semibold text-base-content">{market.min}</span>
                    </td>
                      <td>
                      <span className="font-semibold text-base-content">{(Number(market.min)+Number(market.max))/2}</span>
                    </td>
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
</div>

        </div>
        </div>
    );
};

export default ProductDetailsPage;