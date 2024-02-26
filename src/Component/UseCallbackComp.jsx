import React, { useCallback, useState } from 'react'
import Child from './Child'
import "./../Styling.scss"

const UseCallbackComp = () => {
    const [count, setCount] = useState(1);

    const fun = useCallback(() => { 
       
    }, []);
    
  return (
    <>
      <h1>{count}</h1>
      <Child fun={fun}/>
      <button onClick={() => setCount(count + 1)}>Click</button>

      <div className='main main_fm'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro a quasi, cum eos sapiente nesciunt recusandae nihil tempora blanditiis repellat. Consequatur esse repudiandae nulla tenetur dolorum odio amet eius recusandae.</p>
        <h2>Heading</h2>
        <div>Femil, Jaydip <h5>Hiiiii</h5></div>
      </div>
    </>
  )
}

export default UseCallbackComp
