import React from 'react'
import { BiFilterAlt } from "react-icons/bi";
import { Link } from "react-router-dom";


const Filter = () => {
  return (
    <div className='filter'>
        <BiFilterAlt/>
        <Link to="/">Filter</Link>
    </div>
  )
}

export default Filter