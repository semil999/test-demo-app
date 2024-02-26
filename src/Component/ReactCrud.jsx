import React, { useState } from 'react'
import { FaArrowRightFromBracket } from "react-icons/fa6";

const ReactCrud = () => {
    const blanckObj = {id: 0, fname: "", lname: "", gender: "", hobby: []}
    const [object, setObject] = useState({...blanckObj});
    const [array, setArray] = useState([]);
    const [count, setCount] = useState(0);

    const handleChange = (e) => {
        if(e.target.name == "hobby"){
            if(e.target.checked){
                // object.hobby.push(e.target.value);
                object.hobby = [...object.hobby, e.target.value];
                
            }
            else{
                object.hobby = object.hobby.filter(x => x != e.target.value);
            }
        }
        else{
            object[e.target.name] = e.target.value;
        }
        setObject({...object});
    }

    const insertData = () => {
        if(object.id == 0){
          let number = count;
          number += 1;
          setCount(number);
          object.id = number;
          array.push(object);
        }
        else{
          let index = array.findIndex(x => x.id == object.id);
          array.splice(index, 1, object);
        }
        setArray([...array]);
        setObject({...blanckObj});
    }

    const deleteData = (i) => {
      array.splice(i, 1);
      setArray([...array]);
    }

    const editData = (x) => {
      setObject({...x})
    }

  return (
    <>
      <div className='container mt-5'>
        <form action="" className="shadow-lg p-3 rounded-3" id="form">
            <label htmlFor="">First Name</label>
            <input type="text" name="fname" value={object.fname} className="input_group w-100" onChange={handleChange}/>
            <label htmlFor="">Last Name</label>
            <input type="text" name="lname" value={object.lname} className="input_group w-100" onChange={handleChange}/>

            <label htmlFor="" className="mt-2">Gender</label> <br/>
            <input type="radio" name="gender" className="gender" value="Male" checked={object.gender?.includes("Male")} onChange={handleChange}/> Male
            <input type="radio" name="gender" className="gender ms-2" value="Female" checked={object.gender?.includes("Female")} onChange={handleChange}/> Female <br/>

            <label htmlFor="">Hobby</label> <br/>
            <input type="checkbox" name="hobby" className="me-1" value="Read" checked={object.hobby?.includes("Read")} onChange={handleChange}/>Read
            <input type="checkbox" name="hobby" className="mx-1" value="Traveling" checked={object.hobby?.includes("Traveling")} onChange={handleChange}/>Traveling
            <input type="checkbox" name="hobby" className="mx-1" value="Write" checked={object.hobby?.includes("Write")} onChange={handleChange}/>Write <br/>

            <button type="button" className="btn btn-success mt-3" onClick={insertData}>Save</button>
        </form>

        <table className='table mt-5'>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Hobby</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              array.map((x,i) => {
                return <tr>
                  <td>{x.id}</td>
                  <td>{x.fname}</td>
                  <td>{x.lname}</td>
                  <td>{x.gender}</td>
                  <td>{x.hobby?.join(", ")}</td>
                  <td>
                    <button className='btn btn-warning me-2' onClick={() => editData(x)}>Edit</button>
                    <button className='btn btn-danger' onClick={() => deleteData(i)}>Delete</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ReactCrud
