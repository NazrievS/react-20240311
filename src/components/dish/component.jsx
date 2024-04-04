import { useState } from "react"

export const Dish = ( {dish}) => {
    const [amount, setAmount] = useState(0);

    return (
    <div> 
    {dish.name} 
    <button onClick={() => setAmount(amount - 1)} disabled={amount==0}>-</button>
    <span>{amount}</span>
    <button onClick={() => setAmount(amount + 1)} disabled={amount==5}>+</button>
    </div>
    )
}