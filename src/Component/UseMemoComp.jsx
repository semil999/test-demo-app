import React, { useMemo, useState } from 'react'

const UseMemoComp = () => {
    const [count, setCount] = useState(1);

    // const increment = () => {
    //     console.log("called")
    //     return 10;
    // }

    const increment = useMemo(() => {
        console.log("called")
        return count;
    }, []);

  return (
    <>
        {/* <h1>Memo</h1> */}
        <h2>{increment}</h2>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  )
}

export default UseMemoComp
