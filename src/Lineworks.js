import React from 'react'
import { FaTrashArrowUp } from "react-icons/fa6";
const Lineworks = ({work,handleCheck,handleDelete}) => {
  return (
    <tbody>
    <tr>
        <td>
            <input type='checkbox' 
                onChange={() =>
                handleCheck(work.id)}
                checked={work.checked}
            />
        </td>
        <td>
        <label 
            onDoubleClick={() =>
                handleCheck(work.id)}
                    checked={work.checked}
        >
        {work.work}
        </label>
        </td>
        <td>
        <FaTrashArrowUp   className='delete-btn'  role='button'
            onClick={ () => handleDelete(work.id)
            }
        tabIndex= "0" 
        aria-label={`Delete $(work.work)`}
        />
        
        </td>
    </tr>
    </tbody>
  )
}

export default Lineworks