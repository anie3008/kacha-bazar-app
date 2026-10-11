"use client"

import { useRouter, useSearchParams } from "next/navigation";

const SortDropdown = ({currentSort}:{currentSort?:string}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value && value !== "default") {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }

    router.push(`?${params.toString()}`);
  };

    return (
        <div>
             <select defaultValue={ currentSort||"default"} className="border-2 border-base-200 rounded-xl p-3 mb-4"
             onChange={(e)=> handleSortChange(e.target.value)}>
  <option value="default" disabled={true}>সাজান</option>
  <option value="lowToHigh">কম থেকে বেশি</option>
  <option value="highToLow">বেশি থেকে কম</option>
  
</select>
        </div>
    );
};

export default SortDropdown;