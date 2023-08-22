import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://build-pc-backend.vercel.app/products")
    .then((res) => res.json())
    .then((data) => setProducts(data.data))
  }, [])

  return (
    <div>
      <Navbar/>
      <h1 className="text-5xl">Products</h1>
      <div className="flex gap-4 flex-wrap">
      {
        products?.map((product) => 
        <ProductCard product={product} key={product._id} />
      
      )
      }
      </div>
    </div>
  )
}
