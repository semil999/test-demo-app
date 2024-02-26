import React, { Component } from 'react'

export class ClassBaseComponent extends Component {
    constructor(){
        super();
        this.state = {
            blankObj: {id: 0, profile: "", fname: "", lname: "", gender: "", hobby: []},
            obj: {id: 0, profile: "", fname: "", lname: "", gender: "", hobby: []},
            ary: [],
            count: 0,
        }

        this.handleChange = this.handleChange.bind(this);
        this.insertData = this.insertData.bind(this);
        this.getBase64 = this.getBase64.bind(this);
        this.editData = this.editData.bind(this);
        this.deleteData = this.deleteData.bind(this);
    }

    componentDidMount(){
        console.log("componentDidMount")
        this.state.ary = JSON.parse(localStorage.getItem("ary")) || [];
        this.state.count = JSON.parse(localStorage.getItem("count")) || [];
        this.setState({...this.state.ary, ...this.state.count});
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
        localStorage.setItem("ary", JSON.stringify(this.state.ary));
        localStorage.setItem("count", JSON.stringify(this.state.count));
    }

    async handleChange(e){
        const target = e.target;
        if(target.name == "hobby"){
            if(target.checked){
                this.state.obj.hobby = [...this.state.obj.hobby, target.value];
            }
        }
        else if(target.name == "profile"){
            let img = target.files[0];
            this.state.obj.profile = img ? await this.getBase64(img) : "";
        }
        else{
            this.state.obj[target.name] = target.value;
        }
        this.setState({...this.state, obj: {...this.state.obj}});
    }

    insertData(){
        if(this.state.obj.id == 0){
            let number = this.state.count += 1;
            this.state.obj.id = number;
            this.setState({...this.state, count: number})
            this.state.ary.push({...this.state.obj});
        }
        else{
            const index = this.state.ary.findIndex(x => x.id == this.state.obj.id);
            this.state.ary.splice(index, 1, this.state.obj);
        }
        this.setState({...this.state, ary: [...this.state.ary], obj: {...this.state.blankObj}});
    }

    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    editData(x){
        this.setState({...this.state, obj: {...x}});
    }

    deleteData(i){
        this.state.ary.splice(i,1);
        this.setState({...this.state, ary: [...this.state.ary]});
    }

    render() {
        return (
            <div className='container mt-5'>
            <form action="" className="shadow-lg p-3 rounded-3" id="form">
                <label htmlFor="">First Name</label>
                <input type="text" name="fname" value={this.state.obj.fname} className="input_group w-100" onChange={this.handleChange}/>
                <label htmlFor="">Last Name</label>
                <input type="text" name="lname" value={this.state.obj.lname} className="input_group w-100" onChange={this.handleChange}/>
    
                <input type="file" className='mt-2' name="profile" onChange={this.handleChange}/> <br />
    
                <label htmlFor="" className="mt-2">Gender</label> <br/>
                <input type="radio" name="gender" className="gender" checked={this.state.obj.gender?.includes("Male")} value="Male" onChange={this.handleChange}/> Male
                <input type="radio" name="gender" className="gender ms-2" checked={this.state.obj.gender?.includes("Female")} value="Female" onChange={this.handleChange}/> Female <br/>
    
                <label htmlFor="">Hobby</label> <br/>
                <input type="checkbox" name="hobby" className="me-1" checked={this.state.obj.hobby?.includes("Read")} value="Read" onChange={this.handleChange}/>Read
                <input type="checkbox" name="hobby" className="mx-1" checked={this.state.obj.hobby?.includes("Traveling")} value="Traveling" onChange={this.handleChange}/>Traveling
                <input type="checkbox" name="hobby" className="mx-1" checked={this.state.obj.hobby?.includes("Write")} value="Write" onChange={this.handleChange}/>Write <br/>
    
                <button type="button" className="btn btn-success mt-3" onClick={this.insertData}>Save</button>
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
                    this.state.ary.map((x,i) => {
                        return <tr key={i+"func"}>
                            <td>{x.id}</td>
                            <td><img src={x.profile} width={50} className='img-fluid' alt="" /></td>
                            <td>{x.fname}</td>
                            <td>{x.lname}</td>
                            <td>{x.gender}</td>
                            <td>{x.hobby?.join(", ")}</td>
                            <td>
                                <button type='button' className='btn btn-warning' onClick={() => this.editData(x)}>Edit</button>
                                <button type='button' className='btn btn-danger ms-2' onClick={() => this.deleteData(i)}>Delete</button>
                            </td>
                        </tr>
                    })
                }
              </tbody>
            </table>
          </div>
        )
    }
}

export default ClassBaseComponent
