import React, { useContext } from 'react'
import { UserContext } from '../../App';

const Comp3 = () => {
    const user = useContext(UserContext);
  return (
    <>
        <h1>Comp3</h1> 
    </>
  )
}

export default Comp3
