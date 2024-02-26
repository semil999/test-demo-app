import axios from 'axios';
import React, { useEffect, useState } from 'react'

const TokenApiCrud = () => {
    const blankObj = {id: 0, email: "", name: "", status: "", gender: ""}
    const [obj, setObj] = useState({...blankObj});
    const [ary, setAry] = useState([]);
    let token = "10f1bd21ab3f1308ca20b95bc6c40b1ced5668791322cfdc2133ea929a6be255";

    let header = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    useEffect(() => {
        getUserData();
      }, [])
      
  
    const getUserData = () => {
        axios.get("https://gorest.co.in/public/v2/users", header).then((res) => {
            console.log(res.data)
            setAry([...res.data]);
        });
    }

    const handleChange = async (e) => {
        const target = e.target;
        obj[target.name] = target.value;
        setObj({...obj});
    }

    const insertData = () => {
        if(obj.id == 0){
            axios.post("https://gorest.co.in/public/v2/users", obj , header).then((res) => {
                // getUserData()
                // ary.unshift(res.data);
                // setAry([...ary]);
                setAry([res.data, ...ary]);
            }).catch((err) => {console.log(err)});
        }
        else{
            axios.patch(`https://gorest.co.in/public/v2/users/${obj.id}`, obj , header).then((res) => {
                console.log(res);
                getUserData();
            }).catch((err) => {console.log(err)});
        }
        setObj({...blankObj});
    }
  
    const deleteData = (id) => {
        axios.delete(`https://gorest.co.in/public/v2/users/${id}`, header).then((res) => {
            getUserData()
        })
    }
  
    const editData = (x) => {
        setObj({...x})
    }

  return (
    <>
         <div className='container mt-5'>
          <form action="" className="shadow-lg p-3 rounded-3" id="form">
            <label htmlFor="">Name</label>
            <input type="text" name="name" value={obj.name} className="input_group w-100" onChange={handleChange}/>
            <label htmlFor="">Email</label>
            <input type="email" name="email" value={obj.email} className="input_group w-100 mb-2" onChange={handleChange}/>

            <label htmlFor="" className="mt-2">Gender</label> <br/>
            <input type="radio" name="gender" className="gender" checked={obj.gender?.includes("male")} value="male" onChange={handleChange}/> Male
            <input type="radio" name="gender" className="gender ms-2" checked={obj.gender?.includes("female")} value="female" onChange={handleChange}/> Female <br/>

            <label htmlFor="" className="mt-2">Status</label> <br/>
            <input type="radio" name="status" className="gender" checked={obj.status?.includes("active")} value="active" onChange={handleChange}/> Active
            <input type="radio" name="status" className="gender ms-2" checked={obj.status?.includes("inactive")} value="inactive" onChange={handleChange}/> Inactive <br/>

            <button type="button" className="btn btn-success mt-3" onClick={insertData}>Save</button>
          </form>
          <table className='table mt-5'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                  ary?.map((x,i) => {
                      return <tr key={i+"func"}>
                          <td>{x.id}</td>
                          <td>{x.name}</td>
                          <td>{x.email}</td>
                          <td>{x.gender}</td>
                          <td>{x.status}</td>
                          <td>
                              <button type='button' className='btn btn-warning' onClick={() => editData(x)}>Edit</button>
                              <button type='button' className='btn btn-danger ms-2' onClick={() => deleteData(x.id)}>Delete</button>
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

export default TokenApiCrud
