import React, { useState } from 'react'
import './ConnectDotsMenu.css'
import { Link } from 'react-router-dom';

const ConnectDotsMenu = () => {
  const [name1,setName1]=useState('');
  const [size,setSize]=useState(6);
  const [diff,setDiff]=useState(0);
  return (
    <div className='pge'>
      <div className="frm">
        <div className="pl1">
          <div className="inp1">
            Enter your Name:
          </div>
          <input 
            className='inpt'
            type="text" 
            value={name1}
            onChange={(e)=>setName1(e.target.value)}
          />
        </div>
        <div className="difficulty_size">
          <div className="inp1">
            Difficulty:
          </div>
          <select className='incWidthOfinp' value={diff} onChange={(e)=>setDiff(e.target.value)}>
            <option value="0">Beginner</option>
            <option value="1" selected>Intermediate</option>
            <option value="2">Hard</option>
          </select>
        </div>
        <div className="difficulty_size">
          <div className="inp1">
            Size of Matrix:
          </div>
          <select className='incWidthOfinp' value={size} onChange={(e)=>setSize(e.target.value)}>
            <option value="6">5X5 matrix</option>
            <option value="8" selected>7X7 matrix</option>
            <option value="10">9X9 matrix</option>
          </select>
        </div>
        <div className="sbmt">
          <Link style={{textDecoration:'none'}} to={'/Game'} state={{name1,diff,size}}>
            <div className="strtBtn">Start</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ConnectDotsMenu
