import AllProducts from "@/Component/AllProducts";
import Banner from "@/Component/Banner";
import HighestPriceProducts from "@/Component/HighestPriceProducts";
import LowestPriceProducts from "@/Component/LowestPriceProducts";



export default async function Home() {
const response = await fetch ("https://api.api-store.workers.dev/api/bazardor/products");
const data = await response.json();
console.log(data);
  return (
    <div className="">
      <Banner />
      <HighestPriceProducts products = {data}/>
      <LowestPriceProducts products = {data}/>
      <AllProducts products = {data}/>
    </div>
  );
}
