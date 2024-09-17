import React from 'react'
import { MdAddCircleOutline } from "react-icons/md";
const Addworks = ({newWork,setNewWork,handleSubmit}) => {
  return (
    <form 
    onSubmit={handleSubmit}>
        <br/>
        <input 
            className='getBox'
            autoFocus
            type="text" 
            id='addWork'
            placeholder='Add Your Work'
            required
            value={newWork}
            onChange={(e) => setNewWork(e.target.value)}
        />
        <br/>
        <button 
            className='addbutton'
            type='submit'
            aria-label='Add Work' 
        >
            <MdAddCircleOutline className='add' />    
        </button> 
    </form>
  )
}

export default Addworks