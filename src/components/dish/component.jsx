import { useCallback, useState } from "react"
import { useCurrentUser } from "../contexts/user";
import { Counter } from "../counter/component";
import { useSelector } from "react-redux";

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


export const Dish = ( {dishId}) => {
    
    const {amount, setAmount} = useCount();

    const {currentUser} = useCurrentUser();

    const dish = useSelector((state) => state.dish.entities[dishId]);

    return (
    <div> 
        {dish.name} 
            <div>
                {!!currentUser && <Counter value={amount} onChange={setAmount} />}
            </div>
    </div>
    )
}