import React from 'react'
import { useState } from 'react';
import Item from './Item';
import '../App.css'

function PackingList({items , handleDelete , onToggleItems , hansetItem}) {
    const [sortBy , setSortBy] = useState("input")
    let sortedItems ; 
    if (sortBy === 'input') sortedItems = items ; 
  
    if (sortBy === 'description')
       {sortedItems = 
        items.slice()
        .sort((a,b) => a.description
       .localeCompare(b.description))};
       // so basically in the sort methood something of a less value comes before than the other one 
       // so the .localecompares the descp alphbetically and gives lesser value if the alphabet is smaller 
       // which leads the sorting algo to place that description at a lower position 
       // making the sorting as per alpahetically possible 
  
    if (sortBy === "packed") {
      sortedItems = items.slice()
      .sort((a,b) => 
      Number(a.packed) - Number(b.packed))
  
      // so we know how the sorting algo works , the thing is now here we convert the boolian values into 0 or 1 through the Numbers() methood and now we sub it
  
      // and now if the initial value is false and the other is true ...  after subs it returns a negative value and thus making a , stay before the b 
      // the whole of sorting is that the lower value id before the hghest value 
      // this is taken up in pairs were we consider each pair od elements as a and b and apply the login respetvly
  
    }
  
  
  
  
  
    return (
  
      <>
      <div className="list">
          {sortedItems.map((item) => (
            
            <Item onToggleItems = {onToggleItems} item={item} packy = {handleDelete} key={item.id} />
            
          ))}
  
          {/* so we are not going to create a state variable to actually sort these things .. we are going to use derived state to apply some sort of changes to this thing  */}
        </div>
        {/* ------------------------------------------ */}
            <div className='actions below'>
                  <select value={sortBy} onChange={e=>setSortBy(e.target.value)}>
                        <option value="input">  Sort by input order
                        </option>
                        <option value="description"> Sort by description 
                        </option>
                        <option value="packed"> Sort by packed Status
                        </option>
                  </select>
                <button className='clearList' onClick={() => hansetItem()}>Clear list </button>
            </div>
          </>
      
    );
  }

export default PackingList
