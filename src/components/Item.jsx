import React from 'react'
import '../App.css'

function Item({ item , packy , onToggleItems }) {
    return (
      <li>
        <input type='checkbox' value={item.packed} onChange={(e)=>{
          onToggleItems(item.id)
  
        }}/>
        <span style={item.packed ? { textDecoration: "Line-through" } : {}}>
          <span > {item.option} </span>  {item.description}
        </span>
        <button onClick={()=>packy(item.id)}>❌</button>
        {/* we dont directly call packy bcuz we want it to work only when the button is clicked and not always  */}
      </li>
    );
  }

export default Item
