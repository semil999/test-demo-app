import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Table extends Component {
  constructor(){
    super();
    this.state = {
        ary: JSON.parse(localStorage.getItem("ary")) || [],
    }

    this.deleteData = this.deleteData.bind(this);
  }

  deleteData(i){
    this.state.ary.splice(i,1);
    localStorage.setItem("ary", JSON.stringify(this.state.ary));
    this.setState({...this.state, ary: [...this.state.ary]});
  }
  render() {
    return (
      <>
        <div className='text-center mt-5 mb-3'>
            <Link to={"/form"} className='btn btn-warning'>Form</Link>
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
                this.state.ary.map((x,i) => {
                    return <tr key={i+"func"}>
                        <td>{x.id}</td>
                        <td><img src={x.profile} width={50} className='img-fluid' alt="" /></td>
                        <td>{x.fname}</td>
                        <td>{x.lname}</td>
                        <td>{x.gender}</td>
                        <td>{x.hobby?.join(", ")}</td>
                        <td>
                            <Link className='btn btn-warning' to={`/form/${x.id}`}>Edit</Link>
                            <button type='button' className='btn btn-danger ms-2' onClick={() => this.deleteData(i)}>Delete</button>
                        </td>
                    </tr>
                })
            }
          </tbody>
        </table>
      </>
    )
  }
}

export default Table
