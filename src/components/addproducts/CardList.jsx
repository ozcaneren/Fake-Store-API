import React, { useReducer, useEffect } from "react";

function reducer(state, action) {
  // console.log(state);
  if (action.type === "INCREASE") {
    return {
      ...state,
      addNumber: state.addNumber + 1,
    };
  } else if (action.type === "DECREASE") {
    if (state.addNumber == 1) {
      return state;
    }
    return {
      ...state,
      addNumber: state.addNumber - 1,
    };
  }
}
const CardList = ({ item, removeItem, setAddedItem, itemsArr }) => {
  const [state, dispatch] = useReducer(reducer, item);

  useEffect(() => {
    const newArr = itemsArr.map((itemArr) => {
      itemArr.id == item.id && (item.addNumber = state.addNumber);
      return itemArr;
    });
    setAddedItem(newArr);
  }, [state]);

  return (
    <div className="border-[2px] p-6 mb-8 rounded-lg relative">
      <img src={item.image} className="w-[3rem] mt-[-5rem]" alt="" />
      <button
        className="absolute top-0 right-1 bg-white border-[1px] border-solid border-[#ff0000] text-[#ff0000] rounded-[0.3rem] cursor-pointer transition-[0.2s] hover:bg-[#ff0000] hover:text-white"
        onClick={() => {
          document.querySelector("").classList.add("animate");
          setTimeout(() => removeItem(item), 190);
        }}
      >
        ✘
      </button>
      <h4>{item.title}</h4>
      <hr />
      <div className="flex justify-between">
        <p className="m-0">Price : ${item.price}</p>
        <div className="flex">
          <button
            className="border-[1px] bg-[#00d8ff] border-white text-white min-w-[30px] min-h-[20px] inline-block text-center py-[0.3rem] px-[0.5rem] transition-[0.2s] cursor-pointer hover:bg-red-600 rounded-[0.3rem]"
            onClick={() => {
              dispatch({ type: "INCREASE" });
            }}
          >
            +
          </button>
          <span className="border-[1px] bg-[#00d8ff] border-white text-white min-w-[30px] min-h-[20px] inline-block text-center py-[0.3rem] px-[0.5rem] transition-[0.2s]">{item.addNumber}</span>
          <button
            className="border-[1px] bg-[#00d8ff] border-white text-white min-w-[30px] min-h-[20px] inline-block text-center py-[0.3rem] px-[0.5rem] transition-[0.2s] cursor-pointer rounded-[0.3rem] hover:bg-red-600"
            onClick={() => {
              dispatch({ type: "DECREASE" });
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardList;
