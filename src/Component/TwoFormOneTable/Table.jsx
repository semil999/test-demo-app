import React from 'react'

const Table = (props) => {
  return (
    <>
      <h3 className='text-center mt-4'>Table</h3>
      <table className='table'>
        <thead>
            <tr>
                {
                    props?.value?.map((x,i) => {
                        return <th key={i + x}>
                            {x}
                        </th>
                    })
                }
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                props?.ary?.map((x,i) => {
                    return <tr key={i+"ary"}>
                        {
                            props?.value?.map((e,i) => {
                                return <td key={e + i}>{x[e]}</td>
                            })
                        }
                        <td>
                            <button className='btn btn-success me-2' onClick={() => props?.editData(x)}>Edit</button>
                            <button className='btn btn-danger' onClick={() => props?.deleteData(i)}>Delete</button>
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
