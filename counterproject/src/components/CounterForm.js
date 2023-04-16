import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './CounterForm.css'
import { counterActions } from '../store/reduxfile';


const CounterForm = () => {
const counter=useSelector((state)=>state.counter.counter)
const dispatch=useDispatch();
const show=useSelector(state=>state.counter.showCounter)

const increment=()=>{
  //dispatch({type:'increment'})
  dispatch(counterActions.increment())
}
const decrement=()=>{
  //dispatch({type:'decrement'})
  dispatch(counterActions.decrement())

    
}
const decrementby2=()=>{
  //dispatch({type:'decrease',counter:2})
  dispatch(counterActions.decrease(2))

    
}
const incrementby2=()=>{
  //({type:'increase',counter:2})
  dispatch(counterActions.increase(2))

    
}
const toggleCounterHandler=()=>{
  //dispatch({type:'toggle'})
  dispatch(counterActions.toggleCounter())

    
}







  return (
    <div className="center">
      <form  className='form'>
       {show && <h2>{counter}</h2>}
        <div className='counter'>
        <button type="button" onClick={increment}>Increment</button>
        <button type="button" onClick={decrement}>Decrement</button>
        </div>
        <div className='counter'>
        <button type="button" onClick={incrementby2}>Incrementby2</button>
        <button type="button" onClick={decrementby2}>Decrementby2</button>
        </div>  <div className='counter'>
        <button type="button" onClick={toggleCounterHandler}>ToggleCounter</button>
        </div>
        
      </form>
    </div>
  );
};
;
export default CounterForm