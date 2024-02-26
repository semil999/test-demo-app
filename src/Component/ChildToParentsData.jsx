import React from 'react'

const ChildToParentsData = (props) => {
  return (
    <>
      <h1>Child</h1>
      <button className='btn btn-success' onClick={() => props.getData("Femil")}>Click</button>
    </>
  )
}

export default ChildToParentsData
