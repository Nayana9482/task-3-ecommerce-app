import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>MERN E-Commerce Shopping Cart</h1>

      <h2>Products</h2>
      {products.map((product) => (
        <div
          key={product._id}
          style={{
            border: "1px solid black",
            margin: "20px auto",
            padding: "20px",
            width: "300px"
          }}
        >
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}

      <h2>Cart</h2>
      {cart.map((item, index) => (
        <p key={index}>
          {item.name} - ₹{item.price}
        </p>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default App;