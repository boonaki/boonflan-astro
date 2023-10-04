import { useEffect, useState } from "react"
import CartItem from "./CartItem.astro"

interface Bag {
   id: string,
   sliceCount: number,
   miniCount: number,
   wholeCount: number
}

const BagContents = () => {
   const [items, setItems] = useState([]);

   
   useEffect(() => {
      let products = JSON.parse(localStorage.getItem('products'))
      if(products){
         setItems(products);
      }
      console.log(items)
   }, [])


   return (
      <div className="bg-white flex-col flex p-2 rounded-lg">
         {items.length > 0 && items.map((e: Bag) => 
            <CartItem title="Classic" totalMinis={e.miniCount} totalSlices={e.sliceCount} totalWhole={e.wholeCount} key={e.id} />
         )}
         <div className="w-full h-[2px] rounded-lg bg-[#acacac] mt-4 mb-2"></div>
         <div className="flex flex-col items-end px-4 mb-2">
            <span className="font-bold text-lg">Total</span>
            <span className="leading-none">$9.99</span>
         </div>
      </div>
   )
}

export default BagContents