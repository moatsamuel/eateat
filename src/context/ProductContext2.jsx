import { createContext, useContext, useMemo, useState } from 'react';

const ProductContext = createContext();

const initialProducts = [
  { id: 1, productname: 'Laptop', qty: 10 },
  { id: 2, productname: 'Mouse', qty: 20 },
];

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  const fetchProducts = () => products; // amethod fetching all products
// a method that add product
  const addProduct = (product) => {
    setProducts((prev) => [
      ...prev,
      { id: Date.now(), ...product },
    ]);
  };

  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const value = useMemo(
    () => ({ products, addProduct, removeProduct, fetchProducts }),
    [products]
  );

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export const useProducts = () => useContext(ProductContext);
