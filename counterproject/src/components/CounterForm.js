import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './CounterForm.css'


const CounterForm = () => {
const counter=useSelector(state=>state.counter)
const dispatch=useDispatch();

const increment=()=>{
  dispatch({type:'increment'})
}
const decrement=()=>{
  dispatch({type:'decrement'})
    
}


  return (
    <div className="center">
      <form  className='form'>
        <h2>{counter}</h2>
        <div className='counter'>
        <button type="button" onClick={increment}>Incrementby5</button>
        <button type="button" onClick={decrement}>Decrementby5</button>
        </div>
        
      </form>
    </div>
  );
};
;
export default CounterForm