import React ,{useReducer}from 'react'

const initialState={
    firstValue:1
}
const reducer = (state,action)=>
{
    console.log(state)
    switch(action.type)
    {
        case 'increment':
        return {firstValue:state.firstValue+1}

        case 'decrement':
        return state-1

        case 'reset':
        return initialState

        default:
        return state
    }
}
function CounterOne() {
    const [count,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
            <div>{count.firstValue}</div>
        <button onClick={()=> dispatch({type:'increment'})}>Increment</button>    
        <button onClick={()=> dispatch({type:'decrement'})}>Decrement</button>    
        <button onClick={()=> dispatch({type:'reset'})}>Reset</button>    
        </div>
    )
}

export default CounterOne
