import React from "react";
import Product from "./Product";

export default function BestSeller({ items }) {
  const bestSellerStyle = {
    padding: "32px",
    backgroundColor:"#fff",
    borderRadius:"24px",
    width:"fit-content" ,

  };
  const titleStyle = {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "132%",
    letterSpacing: "0.25px",
    color: "#12121F",
    marginBottom:"24px"
  };
  return (
    <div style={bestSellerStyle}>
      <h1 style={titleStyle}>Bestsellers</h1>
      {items.map((item,index)=>(
          <Product
            backgroundColor= {item.backgroundColor}
            brand={item.brand}
            name={item.name}
            price = {item.price}
            productImage={item.productImage}
            size={item.size}
            key={index}
          />

      ))}


    </div>
  );
}
