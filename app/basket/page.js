'use client'
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import Modal from "../components/Modal"
import { SellCart } from "../components/SellCart"
import {  increase , decrease , cleare ,calculateTotalsPlus,calculateTotalsMines } from "@/redux/features/cartSlice"
import { remove,clearBasket } from "@/redux/features/basketSlice"
import { toglle } from "@/redux/modal/modalSlice"
import {addAmount , minesAmount , cleareAmount} from "@/redux/features/amountBasketSlice"



export default function BuyBasket() {
    const {isOpen} = useSelector((state) => state.modalSlice)
    const {basket} = useSelector((state) => state.basketSlice)
    const {cartItems , amount , total} = useSelector((state) => state.cartReducer)
    const dispatch = useDispatch()
    return(
        <div className="w-full min-h-screen flex flex-wrap items-center gap-[10%] bg-teal-600 justify-center">
            {!basket.length && <div className="w-2/3 flex flex-col gap-2">
                <p className="w-full flex items-center justify-center mb-12 text-3xl font-semibold">your bag is empty!</p>
                <hr className="mt-4" />
                <div className="w-full mt-4 flex items-center justify-between px-12 text-xl font-semibold">
                    <span>back to shop and add items</span>
                    <Link className="bg-cyan-800 rounded px-6 py-1 text-gray-300 shadow-md ]" href={'/'}>Shop</Link>
                </div>
                </div>}
                {basket.length !==0 ? <div className="w-2/3 min-h-screen flex flex-wrap items-center gap-[10%] bg-teal-600 justify-center">
      
                    {cartItems.filter((obj) => basket.indexOf(obj.id) !== -1).map((obj) => {
                        return(
                        <SellCart 
                        key={obj.id} 
                        id={obj.id} 
                        image={obj.img} 
                        title={obj.title} 
                        price={obj.price} 
                        amount={obj.amount} 
                        add={increase}
                        decrease={decrease}
                        remove={remove}
                        calculateTotalsPlus={calculateTotalsPlus}
                        calculateTotalsMines={calculateTotalsMines}
                        addAmount = {addAmount}
                        minesAmount = {minesAmount}
                        />
                        )
                    })}
                    <hr className="mt-4" />
                    <div className="w-full mt-4 flex items-center justify-between px-12 text-xl font-semibold">
                    <button onClick={() => dispatch(toglle())} className="bg-red-800 rounded px-6 py-1 text-gray-300 shadow-md">cleare all</button>
                    <p>${total.toFixed(2)}</p>
                    </div>
                    </div> : ''}
                    
                {isOpen && <Modal cleare={cleare} toglle={toglle} clearBasket={clearBasket} cleareAmount={cleareAmount}/>}
        </div>
    )
}