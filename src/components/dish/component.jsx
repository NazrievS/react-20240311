import { useCallback, useState } from "react"

const useCount = ({defaultValue = 0, step = 1} = {}) => {

    const [amount, setAmount] = useState(defaultValue)

    const increment = useCallback(
        () => setAmount((currentAmount) => currentAmount + step),
        [step]
    )

    const decrement = useCallback(
        () => setAmount((currentAmount) => currentAmount - step),
        [step]
    )

    return { amount, increment, decrement}
};


export const Dish = ( {dish}) => {
    
    const {amount, increment, decrement} = useCount();
    const [value, setValue] = useState(0);

    return (
    <div> 
    {dish.name} 
    <button onClick={decrement} disabled={amount===0}>-</button>
    <span>{amount}</span>
    <button onClick={increment} disabled={amount===5}>+</button>
    </div>
    )
}