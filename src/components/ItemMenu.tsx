import AddingToCart from "./AddingToCart"
import AddToCartButton from "./AddToBagButton"
import { useStore } from '@nanostores/react';
import { selectedItems, isItemMenuRendered, currentSearchParam } from '../cartStore';
import { useEffect } from "react"

const ItemMenu = (props: {slicePrice: number, miniPrice: number, wholePrice: number, id: string}) => {
   const $selectedItems = useStore(selectedItems);
   const $isItemMenuRendered = useStore(isItemMenuRendered); //because re-rendering issues with react + Astro search params are broken(?)
   const $currentSearchParam = useStore(currentSearchParam); //see above note

   if(!$isItemMenuRendered){
      const urlParams = new URLSearchParams(window.location.search)
      const t = urlParams.get('t');
      if(t){
         currentSearchParam.set(t);
   
         const objToSet = {slice: 0, mini: 0, whole: 0}
         objToSet[t]++
         selectedItems.set(objToSet);
      }
      isItemMenuRendered.set(true);
   }
   useEffect(() => {
      const iM = document.getElementById("itemMenu")
      iM.classList.remove('scale-0')
      iM.classList.add('scale-100')
   }, [])
   
   return (
      <div id="itemMenu" className="bg-white p-4 rounded md:w-[768px] lg:w-full lg:shadow-lg transform transition-all duration-250 ease-out scale-0">
         <div className="p-2 mb-2 pb-3 border-b-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-slice" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
               <path d="M3 19l15 -15l3 3l-6 6l2 2a14 14 0 0 1 -14 4" />
            </svg>
            <span className="font-semibold">Slice - <span className="font-normal text-sm">${props.slicePrice}</span></span>
            <AddingToCart type="slice" isIncrementedByParam={$currentSearchParam === "slice"} />
         </div>
         <div className="p-2 mb-2 pb-3 border-b-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cake" width="17" height="17" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
               <path d="M3 20h18v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8z" />
               <path d="M3 14.803c.312 .135 .654 .204 1 .197a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1c.35 .007 .692 -.062 1 -.197" />
            </svg>
            <span className="font-semibold">Mini - <span className="font-normal text-sm">${props.miniPrice}</span></span>
            <AddingToCart type="mini" isIncrementedByParam={$currentSearchParam === "mini"}/>
         </div>
         <div className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cake" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
               <path d="M3 20h18v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8z" />
               <path d="M3 14.803c.312 .135 .654 .204 1 .197a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1c.35 .007 .692 -.062 1 -.197" />
            </svg>
            <span className="font-semibold">Whole - <span className="font-normal text-sm">${props.wholePrice}</span></span>
            <AddingToCart type="whole" isIncrementedByParam={$currentSearchParam === "whole"} />
         </div>
         {($selectedItems.mini > 0 || $selectedItems.slice > 0 || $selectedItems.whole > 0) &&
            <>
               <div className="text-end mt-2 text-sm font-semibold">
                  <span className="mx-2">{$selectedItems.slice} slices</span>
                  <span className="mx-2">{$selectedItems.mini} minis</span>
                  <span className="mx-2">{$selectedItems.whole} whole</span>
               </div>
               <div className="flex justify-end mt-3">
                  <AddToCartButton id={props.id} />
               </div>
            </>
         }
      </div>
   )
}

export default ItemMenu