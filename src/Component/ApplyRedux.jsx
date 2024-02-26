import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCount, minusCount } from '../Redux/Action/countAction';

const ApplyRedux = () => {
    const count = useSelector((state) => state?.countData?.count);
    const dispatch = useDispatch();
  return (
    <>
      <div className='text-center'>
        <h1 className='pb-3'>Apply Redux:-</h1>
        <button className='btn btn-success me-2' onClick={() => dispatch(addCount())}>PLUS</button>
        <button className='btn btn-danger' onClick={() => dispatch(minusCount())}>MINUS</button>
      </div>
    </>
  )
}

export default ApplyRedux
