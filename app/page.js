'use client'
import { Providers } from "@/redux/Provider";
import Link from "next/link";
import { add, getCartItems } from "@/redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/Modal";
import './main.css'
import { useEffect } from "react";
import Cart from "./components/Cart";
import { calculateTotalsPlus , increase } from "@/redux/features/cartSlice";
import {addAmount , minesAmount} from "@/redux/features/amountBasketSlice";

export default function Home() {
  const {cartItems,isLoading,total} = useSelector((state) => state.cartReducer)

  const dispatch = useDispatch()
  console.log(cartItems)

  useEffect(() => {
    dispatch(getCartItems());
  }, []);


  if(isLoading){
    return(
      <div>
        loading...
      </div>
    )
  }
  return (
    
    <div className="w-full min-h-screen flex flex-wrap items-center gap-[10%] bg-teal-600 justify-center">
      
      {cartItems.map((obj) => {
        return(
          <Cart key={obj.id} id={obj.id} image={obj.img} title={obj.title} total={total} price={obj.price} addAmount={addAmount} amount={obj.amount} increase={increase} calculateTotalsPlus={calculateTotalsPlus}/>
        )
      })}
      
    </div>
    
  )
}
