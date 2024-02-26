import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Table = () => {
    const [ary, setAry] = useState(JSON.parse(localStorage.getItem("ary")) || []);

    useEffect(() => {
        setAry(JSON.parse(localStorage.getItem("ary")) || []);
    }, []);

    useEffect(() => {
        localStorage.setItem("ary", JSON.stringify(ary));
    }, [ary]);

    const deleteData = (i) => {
        ary.splice(i,1);
        setAry([...ary]);
    }

  return (
    <>
        <div className='text-center pt-2'>
            <Link className='btn btn-primary' to={"/form"}>Form</Link>
        </div>
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
                            <Link type='button' className='btn btn-warning' to={`/form/${x.id}`}>Edit</Link>
                            <button type='button' className='btn btn-danger ms-2' onClick={() => deleteData(i)}>Delete</button>
                        </td>
                    </tr>
                })
            }
          </tbody>
        </table>
    </>
  )
}

export default Table
