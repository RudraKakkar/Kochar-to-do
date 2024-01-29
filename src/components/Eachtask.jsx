import React from 'react'

const Eachtask = ({x}) => {
  return (
    <>
    
    <tr>

                        <th scope="row">1</th>
                        <td >{x}</td>
                        <td>Otto</td>
                        <td><input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off" />
                            <label className="btn btn-outline-primary" for="btncheck1">Not complete</label></td>

                    </tr>
    
    </>
  )
}

export default Eachtask