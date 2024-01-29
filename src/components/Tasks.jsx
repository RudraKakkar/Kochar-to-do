import React from 'react'
import Eachtask from './Eachtask'

const Tasks = ({ tk }) => {
    console.log(tk)
    return (
        <div className='container shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-3'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className='col-1'>#</th>
                        <th scope="col" className='col-3'>Task</th>
                        <th scope="col" className='col-5'>Discription</th>
                        <th scope="col" className='col-2'>Status</th>

                    </tr>
                </thead>
                <tbody>
                        {tk.map((x) => {
                            return <Eachtask x={x} />
                        })}
                    

                </tbody>
            </table>
        </div>
    )
}

export default Tasks