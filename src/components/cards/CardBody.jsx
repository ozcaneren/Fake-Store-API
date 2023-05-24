import React from "react";
import Card from "./Card";


const CardBody = ({ products, addItem, removeItem, addedItems }) => {
  products.map((product) => (product.isAdded = true));
  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
      ))}
    </div>
  );
};

export default CardBody;
