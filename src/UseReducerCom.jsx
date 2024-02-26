import React, { useReducer } from 'react'

const UseReducerCom = () => {
    const reducer = (state, action) => {
        console.log(state,'state', action);
        switch(action.type){
            case "PLUS":
                return state + 1;
            
            case "MINUS":
                return state - 1;

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, 99);
    
  return (
    <>
      <h1>{state}</h1>
      <button className='btn btn-success me-2' onClick={() => dispatch({type: "PLUS", value: state})}>PLUS</button>
      <button className='btn btn-danger' onClick={() => dispatch({type: "MINUS"})}>MINUS</button>
    </>
  )
}

export default UseReducerCom
