import { decrement, decrementByAmount, increment, incrementAsync, incrementByAmount } from '../state/counter/counterSlice';
import { AppDisptatch, RootState } from '../state/store'
import { useDispatch, useSelector } from "react-redux"

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDisptatch>()
    return (
    <div>
        <h2>{count}</h2>
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
            <button onClick={() => dispatch(incrementAsync(10))}>Increment by 10 asynchronously</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(decrementByAmount(5))}>Decrement by 5</button> 
        </div>
    </div>)
}

export default Counter