import React, { useState } from 'react'
import Table from './Table';

const Form2 = () => {
    const blankObj = {id: 0, city: "", date: "", number: "", password: ""}
    const [obj, setObj] = useState({...blankObj});
    const [ary, setAry] = useState([]);
    const [count, setCount] = useState(0);

    const handleChange = async (e) => {
        const target = e.target;
        obj[target.name] = target.value;
        setObj({...obj});
    }

    const insertData = () => {
        if(obj.id == 0){
            let number = count + 1;
            setCount(number);
            obj.id = number;
            ary.push({...obj});
        }
        else{
            const index = ary.findIndex(x => x.id == obj.id);
            ary.splice(index, 1, obj);
        }
        setAry([...ary]);
        setObj({...blankObj});
    }

    const deleteData = (i) => {
        ary.splice(i,1);
        setAry([...ary]);
    }

    const editData = (x) => {
        setObj({...x});
    }
  return (
    <>
        <form action="" className="shadow-lg p-3 rounded-3" id="form">
            <label htmlFor="">City</label>
            <input type="text" name="city" value={obj.city} className="input_group w-100" onChange={handleChange}/>
            <label htmlFor="">Date</label>
            <input type="date" name="date" value={obj.date} className="input_group w-100" onChange={handleChange}/>
            <label htmlFor="">Number</label>
            <input type="number" name="number" value={obj.number} className="input_group w-100" onChange={handleChange}/>
            <label htmlFor="">Password</label>
            <input type="password" name="password" value={obj.password} className="input_group w-100" onChange={handleChange}/>

            <button type="button" className="btn btn-success mt-3" onClick={insertData}>Save</button>
        </form>

        <Table value={['id', 'city', 'date', 'number', 'password']} ary={ary} deleteData={deleteData} editData={editData}/>
    </>
  )
}

export default Form2
