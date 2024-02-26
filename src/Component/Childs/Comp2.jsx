import React, { useContext } from 'react'
import Comp3 from './Comp3'
import { UserContext } from '../../App'

const Comp2 = () => {
    const {userData , setUserData} = useContext(UserContext);
    
  return (
    <>
        <h1>Comp2 {userData}</h1>
        <button onClick={() => setUserData("Harshit")}>Click Here</button>
        <Comp3 />
    </>
  )
}

export default Comp2
