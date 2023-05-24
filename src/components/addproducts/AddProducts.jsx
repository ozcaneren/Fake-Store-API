import React from "react";
import CardList from "./CardList";

import { useRef } from "react";

const AddProducts = ({ items, click, removeItem, setAddedItem }) => {
  const total = items
    .reduce((pre, cur) => {
      return pre + Number(cur.addNumber) * Number(cur.price);
    }, 0)
    .toFixed(2);
  // let curDate = new Date();
  // console.log(curDate);
  const showDivRef = useRef(null);

  return (
    <div ref={showDivRef} className="h-full fixed w-full top-0 right-0 flex z-[2]">
      <div className="h-full w-[%70] bg-[#00000080] dark:bg-[#d6d2d2]">
        <div className="hidden">
          <div className="w-full h-full bg-white m-auto p-4 flex flex-col items-center">
            <h1 className="mb-16">Shopping</h1>
            {/* <p>{curDate}</p> */}
            <table className="border-[1px] border-solid border-collapse">
              <thead>
                <tr className="border-[1px] border-solid p-[0.3rem]">
                  <th className="border-[1px] border-solid p-[0.3rem]">No.</th>
                  <th className="border-[1px] border-solid p-[0.3rem] w-[20rem]">Item Name</th>
                  <th className="border-[1px] border-solid p-[0.3rem]">Price</th>
                  <th className="border-[1px] border-solid p-[0.3rem]">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr className="border-[1px] border-solid p-[0.3rem]" key={item.id}>
                    <td className="border-[1px] border-solid p-[0.3rem] text-[#00000080]">{i + 1}</td>
                    <td className="border-[1px] border-solid p-[0.3rem] text-[#00000080]">{item.title}</td>
                    <td className="border-[1px] border-solid p-[0.3rem] text-[#00000080]">${item.price}</td>
                    <td className="border-[1px] border-solid p-[0.3rem] text-[#00000080]">{item.addNumber}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-[1px] border-solid p-[0.3rem]">
                  <td className="border-[1px] border-solid p-[0.3rem] text-[#00000080] bg-black" colSpan={2}>
                    Total
                  </td>
                  <td className="border-[1px] border-solid p-[0.3rem] text-[#00000080] bg-black" colSpan={2}>
                    ${total}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <div className="h-[100vh] w-[%70] bg-[#00000033]">
        <div className="flex justify-between items-center h-[10vh]">
          <h1>
            Shopping <span className="bg-[#00d8ff] py-[0.5rem] px-[0.5rem] text-white rounded-lg">{items.length}</span>
            {items.length <= 1 ? " item" : " items"}
          </h1>
          <button
            className="flex justify-center items-center bg-[#b90808] text-white rounded-lg py-[0.5rem] px-[1rem] font-bold cursor-pointer transition-[0.2s] hover:bg-white hover:text-[#00d8ff]"
            onClick={() => {
              showDivRef.current.classList.add("animate");
              setTimeout(() => click(false), 200);
            }}
          >
            ⌫
          </button>
        </div>
        <div className="py-[2.5rem] px-[1rem] h-[70vh] overflow-scroll">
          {items.map((item, i, itemsArr) => (
            <CardList
              key={item.id}
              item={item}
              removeItem={removeItem}
              setAddedItem={setAddedItem}
              itemsArr={itemsArr}
            />
          ))}
        </div>
        <div className="h-[20vh]">
          <div className="h-[1px] bg-[#00000080]"></div>
          <div className="flex justify-between items-center py-0 px-4">
            <h4>Total :</h4>
            <h1>${total}</h1>
          </div>
          <div className="text-center">
            <button
              className="text-[2rem] py-[1rem] px-[2rem] bg-[#00d8ff] text-white rounded-lg border-[2px] border-solid font-bold cursor-pointer transition-[0.2s] hover:bg-white hover:border-[#00d8ff] hover:text-[#00d8ff]"
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
