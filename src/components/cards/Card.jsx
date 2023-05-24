import React, { useEffect } from "react";
// import { AddRemoveBtn } from "../addremoveBtn/AddRemoveBtn";
import { useState } from "react";


const Card = ({ product, addItem, removeItem, addedItems }) => {
  const [isAdded, setIsAdded] = useState(true);
  const item = addedItems.filter((addedItem) => addedItem.id == product.id);
  useEffect(() => {
    item.length == 0 ? setIsAdded(true) : setIsAdded(false);
  }, [item]);

  // console.log(item);
  return (
    <div className="flex flex-col justify-between p-3 rounded-lg transition-[0.3s] shadow-sm hover:shadow-md hover:scale-[1.01] border-2 border-[#00d8ff] dark:border-gray-200">
      <div className=" relative flex items-center justify-center h-60 dark:bg-slate-900">
        <img className="absolute top-0 right-0 h-full w-full object-contain" src={product.image} alt="" /> 
      </div>
      <div className="">
        <h4 className="font-bold dark:text-gray-300">{product.title}</h4>
        <h2 className="underline text-gray-700 dark:text-gray-500">{product.category}</h2>
        <p className="text-[#00000080] my-2 mx-auto truncate dark:text-gray-300">{product.description}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="dark:text-white">Price : ${product.price}</span>
        <button
          className={isAdded ? "w-fit py-2 px-4 block text-base bg-white dark:bg-gray-500 text-[#00d8ff] dark:text-gray-300 border-2 border-solid border-[#00d8ff] dark:border-gray-200 rounded-lg cursor-pointer hover:bg-[#00d8ff] dark:hover:bg-gray-400 hover:text-white dark:hover:text-gray-800" : "w-fit py-2 px-4 block text-base bg-white border-2 border-solid border-red-500 rounded-lg cursor-pointer text-red-500 hover:bg-red-500 hover:text-white"}
          onClick={() => {
            isAdded ? addItem(product) : removeItem(product);
            setIsAdded(!isAdded);
          }}
        >
          {isAdded ? "ADD " : "CANCEL"}
        </button>
      </div>
    </div>
  );
};
  
  
  
  
  
  
  
  
  
  
  
  
  /*return (
    <div className=" flex items-center">
      <div></div>
      <div className="flex h-full w-full flex-col rounded-lg border border-blue-400 shadow-md">
        <a className="relative mx-3 mt-3 flex h-60 rounded-xl">
          <img className="absolute top-0 right-0 h-full w-full object-contain" src={product.image} alt="" />
        </a>
        <div className="mt-4 px-5 pb-5">
          <h5 className="text-xl tracking-tight ">{product.title}</h5>
          <h6 className="text-sm text-gray-500">{product.category}</h6>
          <p className="text-gray-600 truncate">{product.description}</p>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-lg font-bold ">Price: ${product.price}</span>
            </p>
          </div> 
        </div>
        <div className="">
          <a href="#" className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );*/







export default Card;
