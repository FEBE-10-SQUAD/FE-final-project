import React from 'react'
import { BiFilterAlt } from "react-icons/bi";
import { Link } from "react-router-dom";


const Filter = () => {
  return (
    <div className='filter'>
        <BiFilterAlt/>
        <Link to="/"><h4>Filter</h4></Link>
    </div>
  )
}

export default Filter