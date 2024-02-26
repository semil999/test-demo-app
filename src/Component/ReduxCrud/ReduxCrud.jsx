import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, removeData, updateData } from '../../Redux/Action/crudAction';

const ReduxCrud = () => {
    const ary = useSelector(state => state?.crud?.ary);
    const dispatch = useDispatch();
    const blankObj = {id: 0, fname: "", profile: "", lname: "", gender: "", hobby: []}
    const [obj, setObj] = useState({...blankObj});
    const [count, setCount] = useState(0);

    const handleChange = async (e) => {
        const target = e.target;
        if(target.name == "hobby"){
            if(target.checked){
                obj.hobby = [...obj.hobby, target.value];
            }
            else{
                obj.hobby = obj.hobby.filter(x => x != target.name);
            }
        }
        else if(target.name == "profile"){
            let img = target.files[0];
            obj.profile = img ? await toBase64(img) : "";
            console.log(obj.profile)
        }
        else{
            obj[target.name] = target.value;
        }
        setObj({...obj});
    }

    const insertData = () => {
        if(obj.id == 0){
            let number = count + 1;
            setCount(number);
            obj.id = number;
            dispatch(addData(obj));
        }
        else{
            const index = ary.findIndex(x => x.id == obj.id);
            dispatch(updateData(index, obj));
        }
        setObj({...blankObj});
    }

    const deleteData = (i) => {
        dispatch(removeData(i))
    }

    const editData = (x) => {
        setObj({...x});
    }

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });
  return (
    <>
      <div className='container mt-5'>
        <form action="" className="shadow-lg p-3 rounded-3" id="form">
            <label htmlFor="">First Name</label>
            <input type="text" name="fname" value={obj.fname} className="input_group w-100" onChange={handleChange}/>
            <label htmlFor="">Last Name</label>
            <input type="text" name="lname" value={obj.lname} className="input_group w-100" onChange={handleChange}/>

            <input type="file" name="profile" onChange={handleChange}/>

            <label htmlFor="" className="mt-2">Gender</label> <br/>
            <input type="radio" name="gender" className="gender" checked={obj.gender?.includes("Male")} value="Male" onChange={handleChange}/> Male
            <input type="radio" name="gender" className="gender ms-2" checked={obj.gender?.includes("Female")} value="Female" onChange={handleChange}/> Female <br/>

            <label htmlFor="">Hobby</label> <br/>
            <input type="checkbox" name="hobby" className="me-1" checked={obj.hobby?.includes("Read")} value="Read" onChange={handleChange}/>Read
            <input type="checkbox" name="hobby" className="mx-1" checked={obj.hobby?.includes("Traveling")} value="Traveling" onChange={handleChange}/>Traveling
            <input type="checkbox" name="hobby" className="mx-1" checked={obj.hobby?.includes("Write")} value="Write" onChange={handleChange}/>Write <br/>

            <button type="button" className="btn btn-success mt-3" onClick={insertData}>Save</button>
        </form>

        <table className='table mt-5'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Profile</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Hobby</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                ary?.map((x,i) => {
                    return <tr key={i+"func"}>
                        <td>{x.id}</td>
                        <td><img src={x.profile} width={50} className='img-fluid' alt="" /></td>
                        <td>{x.fname}</td>
                        <td>{x.lname}</td>
                        <td>{x.gender}</td>
                        <td>{x.hobby?.join(", ")}</td>
                        <td>
                            <button type='button' className='btn btn-warning' onClick={() => editData(x)}>Edit</button>
                            <button type='button' className='btn btn-danger ms-2' onClick={() => deleteData(x?.id)}>Delete</button>
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

export default ReduxCrud
