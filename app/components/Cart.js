'use client'

import { addBasket } from "@/redux/features/basketSlice"
import { useDispatch, useSelector } from "react-redux"

export default function Cart ({image,title,price,addAmount,total , id,calculateTotalsPlus , increase}){
    const {basket} = useSelector((store) => store.amountBasketSlice)
    const dispatch = useDispatch()
    const cartFunctions = (id,total) =>{
        dispatch(addBasket(id))
        dispatch(calculateTotalsPlus({id}))
        dispatch(addAmount())
        if(total > 0){
            dispatch(increase({id}))
        }  
    }
    return(
        <div className="w-[240px] h-[440px] mt-6 border overflow-hidden flex flex-col rounded">
            <div className="w-full h-2/3 rounded-t rounded-l">
                <img src={image} />
            </div>
            <div className="w-full h-1/3 flex flex-col gap-2 px-2">
                <p className="text-xl font-medium">{title}</p>
                <p className="text-xl">price: ${price}</p>
                <div className="w-full flex items-center justify-center mt-4">
                    <button onClick={() => cartFunctions(id,total)} className="bg-blue-800 w-[96px] py-1 rounded text-xl text-gray-300 font-medium active:bg-blue-950 ease-in-out active:scale-95">buy</button>
                </div>
            </div>
        </div>
    )
}