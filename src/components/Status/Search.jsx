import React from 'react'

const Seacrh = () => {
  return (
    <div className='seacrh'>
       <div className='seacrh-input'>
        <input type="text" placeholder="Job Title or Keyword" value={Seacrh} />
       </div>
       <div className='seacrh-button'>
        <button><h4>FIND</h4></button>
       </div>
    </div>
  )
}

export default Seacrh