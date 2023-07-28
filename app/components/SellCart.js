'use client'

import { useDispatch } from "react-redux"


export const SellCart = ({image,title,price , id, add,amount,decrease,remove,calculateTotalsPlus,calculateTotalsMines ,addAmount , minesAmount}) => {
    
    const dispatch = useDispatch()
    const plus = (id) =>{
        dispatch(add({id}))
        dispatch(calculateTotalsPlus({id}))
        dispatch(addAmount())
    }
    const mines = (id,amount) =>{
        if(amount == 1){
            dispatch(remove(id))
        }else{
            dispatch(decrease({id}))
        }
        dispatch(calculateTotalsMines({id}))
        dispatch(minesAmount())
    }
    const removeItem = (id) =>{
        dispatch(remove(id))
        dispatch(calculateTotalsMines({id}))
    }
    return(
        <div className="w-full h-[148px] py-5 flex gap-2">
            <div className="w-1/2 h-full flex">
                <div className=" h-full">
                    <img className="h-full" src={image}/>
                </div>
                <div className="w-1/2 flex flex-col gap-1">
                    <p className="text-xl text-gray-300">{title}</p>
                    <p className="text-base text-gray-300">${price}</p>
                    <button onClick={() => removeItem(id)} className="w-1/2 ml-0 text-base text-gray-300 border">remove</button>
                </div>
            </div>
            <div className="w-1/2 flex items-center justify-end gap-2">
                <button onClick={() => mines(id,amount)} className="flex items-center shadow-costom px-2 text-4xl text-gray-300 active:scale-95">-</button>
                <span className="text-base text-gray-300">{amount}</span>
                <button onClick={() => plus(id)} className="flex items-center shadow-costom  px-2 text-3xl text-gray-300 active:scale-95">+</button>
            </div>
        </div>
    )
}