import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ImageApiCrud = () => {
    const blankObj = {_id: 0, firstName: "", lastName: "", hobbies: [], gender: "", city: "", age: "", image: ""}
    const [ary, setAry] = useState([]);
    const [obj, setObj] = useState({...blankObj});

    useEffect(() => {
      getUserData();
    }, []);
    

    const getUserData = () => {
        axios.get("https://student-api.mycodelibraries.com/api/user/get").then((res) => {
            setAry([...res.data.data])
        })
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
        else if(target.name == "image"){
            obj.image = target.files[0]
        }
        else{
            obj[target.name] = target.value;
        }
        setObj({...obj});
    }
  
    const insertData = () => {
        let formData = new FormData();
        formData.append("id", obj._id)
        formData.append("firstName", obj.firstName)
        formData.append("lastName", obj.lastName)
        formData.append("age", obj.age)
        formData.append("city", obj.city)
        formData.append("hobbies", obj.hobbies)
        formData.append("gender", obj.gender)
        formData.append("userImage", obj.image)

      if(obj._id == 0){
        axios.post("https://student-api.mycodelibraries.com/api/user/add", formData).then(() => {getUserData()});
      }
      else{
        axios.post("https://student-api.mycodelibraries.com/api/user/update", formData).then(() => getUserData());
      }
      setObj({...blankObj})
    }
  
    const deleteData = (id) => {
      axios.delete(`https://student-api.mycodelibraries.com/api/user/delete?id=${""}`).then((res) => {
        getUserData();
      })
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

            <input type="file" name="image" className="input_group w-100 my-2" onChange={handleChange}/> <br />

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
                <th>Image</th>
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
                          <td><img src={x.image} alt="" width={50}/></td>
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

export default ImageApiCrud
