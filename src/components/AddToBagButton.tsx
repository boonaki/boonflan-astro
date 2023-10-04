import { useStore } from '@nanostores/react';
import { selectedItems } from '../cartStore';

interface Bag {
   id: string,
   sliceCount: number,
   miniCount: number,
   wholeCount: number
}

const AddToBagButton = (props: {id: string}) => {

   const $selectedItems = useStore(selectedItems);

   const handleAddToBag = () => {
      let objToStore: Bag = {
         id: props.id,
         sliceCount: $selectedItems.slice,
         miniCount: $selectedItems.mini,
         wholeCount: $selectedItems.whole,
      }
      let products: Bag[] = []
      if(localStorage.getItem('products')){
         products = JSON.parse(localStorage.getItem('products'))
      }
      products.push(objToStore);
      localStorage.setItem('products', JSON.stringify(products))
      console.log(localStorage, 'added')
   }


   return (
      <button onClick={() => handleAddToBag()} className="flex items-center border-2 rounded-lg py-1 px-2 font-semibold hover:border-transparent hover:bg-[#ffa95e] transition flex items-center">Add to Bag
         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-paper-bag ml-1" width="23" height="23" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 3h8a2 2 0 0 1 2 2v1.82a5 5 0 0 0 .528 2.236l.944 1.888a5 5 0 0 1 .528 2.236v5.82a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-5.82a5 5 0 0 1 .528 -2.236l1.472 -2.944v-3a2 2 0 0 1 2 -2z" />
            <path d="M14 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M6 21a2 2 0 0 0 2 -2v-5.82a5 5 0 0 0 -.528 -2.236l-1.472 -2.944" />
            <path d="M11 7h2" />
         </svg>
      </button>
   )
}

export default AddToBagButton