import React, { useState } from 'react'
import Table from './Table';
import Swal from 'sweetalert2';

const Form1 = () => {
    const blankObj = {id: 0, fname: "", lname: "", email: "", gender: "", hobby: []}
    const [obj, setObj] = useState({...blankObj});
    const [validation, setValidation] = useState({fname: "", lname: "", email: "", gender: "", hobby: []});
    const [ary, setAry] = useState([]);
    const [count, setCount] = useState(0);

    const handleChange = async (e) => {
        const target = e.target;
        if(target.name == "hobby"){
            if(target.checked){
                obj.hobby = [...obj.hobby, target.value];
                validation.hobby = [...validation.hobby , target.value]
            }
            else{
                obj.hobby = obj.hobby.filter(x => x != target.value);
                validation.hobby = validation.hobby.filter(x => x != target.value);
            }
        }
        else{
            obj[target.name] = target.value;
            validation[target.name] = target.value;
        }
        setObj({...obj});
        setValidation({...validation});
    }

    const insertData = () => {
        const validAry = Object.keys(validation);
        const submit = validAry.every(x => x == "hobby" ? Boolean(validation["hobby"]?.length) : validation[x] != "");
        if(submit){
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
            setValidation({fname: "", lname: "", email: "", gender: "", hobby: []});
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill the all fields."
            });
        }
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
            <label htmlFor="">First Name</label>
            <input type="text" name="fname" value={obj.fname} className="input_group w-100" onChange={handleChange}/>
            {
                !Boolean(validation.fname) ? <div className='py-2'>
                    <p className='mb-0 text-danger'>Please fill the field</p>
                </div> : <></>
            }
            
            <label htmlFor="">Last Name</label>
            <input type="text" name="lname" value={obj.lname} className="input_group w-100" onChange={handleChange}/>

            <label htmlFor="">Email</label>
            <input type="email" name="email" value={obj.email} className="input_group w-100" onChange={handleChange}/>

            <label htmlFor="" className="mt-2">Gender</label> <br/>
            <input type="radio" name="gender" className="gender" checked={obj.gender?.includes("Male")} value="Male" onChange={handleChange}/> Male
            <input type="radio" name="gender" className="gender ms-2" checked={obj.gender?.includes("Female")} value="Female" onChange={handleChange}/> Female <br/>

            <label htmlFor="">Hobby</label> <br/>
            <input type="checkbox" name="hobby" className="me-1" checked={obj.hobby?.includes("Read")} value="Read" onChange={handleChange}/>Read
            <input type="checkbox" name="hobby" className="mx-1" checked={obj.hobby?.includes("Traveling")} value="Traveling" onChange={handleChange}/>Traveling
            <input type="checkbox" name="hobby" className="mx-1" checked={obj.hobby?.includes("Write")} value="Write" onChange={handleChange}/>Write <br/>

            <button type="button" className="btn btn-success mt-3" onClick={insertData}>Save</button>
        </form>

        <Table value={['id', 'fname', 'lname', 'email', 'gender', 'hobby']} ary={ary} deleteData={deleteData} editData={editData}/>
    </>
  )
}

export default Form1
