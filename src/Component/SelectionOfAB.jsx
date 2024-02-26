import React, { useState } from 'react'

const SelectionOfAB = () => {
    const [value, setValue] = useState("");
    const [ary, setAry] = useState([]);
    const [prevState, setPrevState] = useState("");

    const handleClick = () => {
        if(value && value != ""){
            if(value != prevState){
                ary.push([value]);
            }
            else{
                ary[ary.length - 1].push(value);
            }
        }
        setPrevState(value);
        setAry([...ary]);
    }
  return (
    <>
      <div className='container mt-3'>
        <select value={value} style={{width: "300px"}} onChange={(e) => setValue(e.target.value)}>
            <option value="" disabled selected>--Select--</option>
            <option value="A">A</option>
            <option value="B">B</option>
        </select>
        <button className='btn btn-success ms-3' type='button' onClick={handleClick}>Save</button>

        <div>
            <table className=''>
                <thead></thead>
                <tbody>
                    <tr>
                        {
                            ary.map((item, i) => {
                                return <td className='border-end p-2' style={{verticalAlign: "top"}} key={"tr" + i}>
                                        {
                                            item?.map((x,index) => {
                                                return <tr key={`td${i}${index}`}>{x}</tr>
                                            })
                                        }
                                    </td>
                            })
                        }
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </>
  )
}

export default SelectionOfAB