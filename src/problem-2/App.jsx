import React, { useState } from "react";
import AddProductForm from "./AddProductForm";
import ProductList from "./ProductList";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Apple", price: 1 },
    { id: 2, name: "Banana", price: 2 },
  ]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  };

  return (
    <div>
      <h1>Product List</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
};

export default App;
