import React, { useState } from 'react'
interface Product{
    id: string,
    name: string,
    price: string,
    quantity:string,
}

export default function Bai2() {
  const [product, setProduct] = useState<Product>({
    id: "1",
    name: "Coca Cola",
    price: "1000 $",
    quantity:"10",
  });
  
  return (
    <div>
        <h4>Bài tập 2</h4>
        <h5>Thông tin sản phẩm</h5>
        <p>ID: {product.id}</p>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Quantity: {product.quantity}</p>
    </div>
  )
}
