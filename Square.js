import React, {useState} from 'react';
import './style.css'

function Square({value,disable,showhandleclick}) {
    
  return (
    <React.Fragment>
        <button className='btn' disabled={disable} id={value} onClick={showhandleclick}>{value}</button>
    </React.Fragment>
  )
}

export default Square;