import React, { useEffect, useRef } from 'react'
import Comp2 from './Comp2'

const Comp1 = () => {
    const inp = useRef();
    const h1 = useRef();

    useEffect(() => {
        inp.current.value = "Bansi"
        console.log(h1.current)
    }, []);
    
    return (
        <>
            <h1 ref={h1}>Comp1</h1>
            <input type="text" value={"Femil"} onChange={() => {}} ref={inp} />
            <Comp2 />
        </>
    )
}

export default Comp1
