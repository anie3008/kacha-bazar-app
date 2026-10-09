import { ProductsType } from "@/types/types";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const Marquee = async() => {
    const response = await fetch("https://api.api-store.workers.dev/api/bazardor/products")
    const data = await response.json();
    return (
        <div>
            <MarqueeText direction="right" duration={10}>
            {data.map((product:ProductsType) => <div key = {product.id} className="mx-2">
<span>{product.image}</span> 
<span className="mx-1">{product.nameBn}</span> 
<span>{product.today} টাকা / {product.unit} </span>

<div 
                className={`badge gap-1.5 p-1.5 font-semibold text-xs ${
    product.change.dir === 'up' 
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
    )}
        </MarqueeText>
        </div>
    );
};

export default Marquee;