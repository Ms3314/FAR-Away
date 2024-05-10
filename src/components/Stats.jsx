import React from 'react'
import '../App.css'

function Stats({items}) {
    if (!items.length) {
      return (
        <p className='stats'>
          <em>Start Adding Items to yours packing list 🚀</em>
        </p>
      )
    }
    const Tompack = items.length
    let dopack = 0
    items.forEach(e =>{ if(e.packed === true ) dopack++ })
    let percentage = Math.round(dopack*100/Tompack)
    return (
      <footer className="stats">
        <em>{percentage === 100 ? `You are ready to go ✈️` :  ` You have ${Tompack} items on your list , and you already packed ${dopack} items ${percentage}%`   }</em>
      </footer>
    );
  }

export default Stats
