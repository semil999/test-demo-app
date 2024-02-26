import React, { useEffect, useState } from 'react'

const FetchApiCrud = () => {
    const blankObj = {_id: 0, firstName: "", lastName: "", hobbies: [], gender: "", city: "", age: ""}
    const [ary, setAry] = useState([]);
    const [obj, setObj] = useState({...blankObj});

    useEffect(() => {
      getStudentData();
    }, []);
    

    const getStudentData = async () => {
        const response = await fetch("https://student-api.mycodelibraries.com/api/student/get");
        const data = await response.json();
        setAry([...data.data]);
    }

    const handleChange = async (e) => {
      const target = e.target;
      if(target.name == "hobbies"){
          if(target.checked){
            obj.hobbies = [...obj.hobbies, target.value];
          }
          else{
            obj.hobbies = obj.hobbies.filter(x => x != target.value);
          }
      }
      else{
          obj[target.name] = target.value;
      }
      setObj({...obj});
  }

  const insertData = async () => {
    if(obj._id == 0){
        await fetch("https://student-api.mycodelibraries.com/api/student/add", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(obj)
        }).then((res) => {
            getStudentData();
        }).catch((err) => console.log(err));
    }
    else{
        obj.id = obj._id;
        await fetch("https://student-api.mycodelibraries.com/api/student/update", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(obj)
        }).then(() => {
            getStudentData();
        }).catch((err) => console.log(err));
    }
    setObj({...blankObj})
  }

  const deleteData = async (id) => {
    await fetch(`https://student-api.mycodelibraries.com/api/student/delete?id=${id}`, {
        method: 'DELETE',
        headers: {'Content-Type':'application/json'}
    }).then(() => {
        getStudentData();
    }).catch((err) => console.log(err));
  }

  const editData = (x) => {
    let data = {...x};
    data.hobbies = data?.hobbies?.split(",");
    setObj({...data});
  }
  return (
    <>
      <div className='container mt-5'>
          <form action="" className="shadow-lg p-3 rounded-3" id="form">
            <label htmlFor="">First Name</label>
            <input type="text" name="firstName" value={obj.firstName} className="input_group w-100" onChange={handleChange}/>
            <label htmlFor="">Last Name</label>
            <input type="text" name="lastName" value={obj.lastName} className="input_group w-100 mb-2" onChange={handleChange}/>
            <label htmlFor="">City</label>
            <input type="text" name="city" value={obj.city} className="input_group w-100 mb-2" onChange={handleChange}/>
            <label htmlFor="">Age</label>
            <input type="number" name="age" value={obj.age} className="input_group w-100 mb-2" onChange={handleChange}/>

            <label htmlFor="" className="mt-2">Gender</label> <br/>
            <input type="radio" name="gender" className="gender" checked={obj.gender?.includes("Male")} value="Male" onChange={handleChange}/> Male
            <input type="radio" name="gender" className="gender ms-2" checked={obj.gender?.includes("Female")} value="Female" onChange={handleChange}/> Female <br/>

            <label htmlFor="">Hobby</label> <br/>
            <input type="checkbox" name="hobbies" className="me-1" checked={obj.hobbies?.includes("Read")} value="Read" onChange={handleChange}/>Read
            <input type="checkbox" name="hobbies" className="mx-1" checked={obj.hobbies?.includes("Traveling")} value="Traveling" onChange={handleChange}/>Traveling
            <input type="checkbox" name="hobbies" className="mx-1" checked={obj.hobbies?.includes("Write")} value="Write" onChange={handleChange}/>Write <br/>

            <button type="button" className="btn btn-success mt-3" onClick={insertData}>Save</button>
          </form>
          <table className='table mt-5'>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>City</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Hobby</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                  ary?.map((x,i) => {
                      return <tr key={i+"func"}>
                          <td>{i+1}</td>
                          <td>{x.firstName}</td>
                          <td>{x.lastName}</td>
                          <td>{x.city}</td>
                          <td>{x.age}</td>
                          <td>{x.gender}</td>
                          <td>{x?.hobbies?.split(",")?.join(",")}</td>
                          <td>
                              <button type='button' className='btn btn-warning' onClick={() => editData(x)}>Edit</button>
                              <button type='button' className='btn btn-danger ms-2' onClick={() => deleteData(x._id)}>Delete</button>
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

export default FetchApiCrud
