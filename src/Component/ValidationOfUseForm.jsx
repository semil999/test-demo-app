import React from 'react'
import { useForm } from 'react-hook-form';

const ValidationOfUseForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors,'errors')
    const handleRegistration = (data) => {
        console.log(data);
    };
    const handleError = (errors) => {};

    const registerOptions = {
        name: { required: "Name is required" },
        email: { required: "Email is required" },
        password: {
        required: "Password is required",
        minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
        }
        }
    };
  return (
    <>
      <form onSubmit={handleSubmit(handleRegistration)} className='w-50 mx-auto shadow-lg p-3 mt-5'>
        <div>
            <label>Name</label>
            <input className='w-100 my-2' name="name" type="text" {...register('name', registerOptions.name) }/>
            <small className="text-danger">
            {errors?.name && errors.name.message}
            </small>
        </div>
        <div>
            <label>Email</label>
            <input className='w-100 my-2'
            type="email"
            name="email"
            {...register('email', registerOptions.email)}
            />
            <small className="text-danger">
            {errors?.email && errors.email.message}
            </small>
        </div>
        <div>
            <label>Password</label>
            <input className='w-100 my-2'
            type="password"
            name="password"
            {...register('password', registerOptions.password)}
            />
            <small className="text-danger">
            {errors?.password && errors.password.message}
            </small>
        </div>
        <button className='btn btn-success mt-2'>Submit</button>
        </form>
    </>
  )
}

export default ValidationOfUseForm
