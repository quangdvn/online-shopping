import React from "react";
import CartItem from "./CartItem";

export default function CartList({ listValue }) {
  const { myCart } = listValue;
  return (
    <div className="container-fluid">
      {myCart.map(curItem => {
          return <CartItem key={curItem.id} item={curItem} itemValue={listValue}/>
      })}
      
    </div>
  );
}
