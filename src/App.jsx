import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import AddProducts from "./components/addproducts/AddProducts";
import CardBody from "./components/cards/CardBody";
import Button from "./components/button/Button";

const App = () => {
  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data));
    console.count("hi");
  }, []);
  function changingSrarchData(e) {
    setSearchValue(e.target.value);
  }
  const itmesFilter = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }
  // console.log(addedItems);
  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
    // console.log(addedItems);
  }
  return (
    <>
      <div className="bg-white dark:bg-slate-900">
        {/* <Header /> */}
        <div className="mx-auto p-8 rounded-lg">
          <div className="flex justify-between items-center shadow shadow-blue-300 dark:shadow-gray-100 p-4 rounded-lg mb-4 sticky top-0 bg-white dark:bg-slate-900 z-[2]">
            <Header />
            <div className="flex justify-center gap-8">
              <Search
                products={items}
                value={searchValue}
                onChangeData={changingSrarchData}
              />
              <Button num={addedItems.length} click={setShowAddProducts} />
            </div>
          </div>

          {showAddProducts && (
            <AddProducts
              click={setShowAddProducts}
              items={addedItems}
              removeItem={removeItem}
              setAddedItem={setAddedItem}
            />
          )}
          <CardBody
            products={itmesFilter}
            addItem={addItem}
            removeItem={removeItem}
            addedItems={addedItems}
          />
        </div>
      </div>
    </>
  );
};

export default App;
