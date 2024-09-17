import React from 'react'

const Searchwork = ({searchWork,setSearchWork}) => {
  return (
    <form onSubmit={
        (e) => e.preventDefault()
    }>
        <input className='getBox' type="text" id="search" role='searchbox' 
        placeholder='Enter the added work'
        value={searchWork}
        onChange={(e) => setSearchWork(e.target.value)}
        />
    </form>
  )
}

export default Searchwork