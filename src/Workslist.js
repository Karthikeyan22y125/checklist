import React from 'react'
import Lineworks from './Lineworks'
const Workslist = ({works,handleCheck,handleDelete}) => {
  return (
    <table>
        <thead>
                <tr>
                    <th>STATUS</th>
                    <th>WORK</th>
                    <th>DELETE</th>
                </tr>
        </thead>
                {
                works.map((work) => (
                    <Lineworks
                    work={work}
                    key={work.id}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                    />
                )
                )}
            </table>
  )
}

export default Workslist