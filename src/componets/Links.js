import React from 'react'
import {Link} from "react-router-dom"
import './style.css';
function Links(props) {
    return (
        <ul className= 'list-group'>
        {props.gitdata.map((item,index)=>(   
        <li key={index} className='list-group-item'>    
        <Link to="/details" >
          <p onClick={()=>props.setclick(item)} className='myptag'>{index+1} : {item.title}</p>
          </Link></li>))
          }
        </ul>
    )
}

export default Links