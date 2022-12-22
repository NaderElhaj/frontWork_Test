import React from "react";

export default function Product({
  backgroundColor = "#fff",
  name = "Nike Air Max 90",
  brand = "Nike",
  price = "$195.80",
  productImage = "/images/nike.png",
  size = "sm",
}) {
  let scale = 1;
  if (size === "sm") scale = 1;
  if (size === "md") scale = 1.25;
  if (size === "lg") scale = 1.5;
  const productStyle = {
    background: backgroundColor,
    width: `${scale * 315}px`,
    borderRadius: "24px",
    padding: ` ${scale * 13}px ${scale * 18}px `,
    display:"flex",
    justifyContent:"space-around"
  };
  const imageStyle = {
    width: "100px",
    height: "100px",
  };
  const productDescStyle = {
    width:"50%"
  };
  const nameStyle = {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.25px",
    color: "#FE805C",
  };
  const brandStyle = {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0.25px",
    color: "#AFAFBD",
  };
  const priceStyle = {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.25px",
    color: "#12121F",
  };
  return (
    <div style={productStyle}>
      <img src={productImage} alt="Product Image" style={imageStyle} />
      <div style={productDescStyle}>
        <h1 style={nameStyle}>{name} </h1>
        <p style={brandStyle}>{brand}</p>
        <p style={priceStyle}>{price}</p>
      </div>
    </div>
  );
}
