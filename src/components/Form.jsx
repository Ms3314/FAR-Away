import React from 'react'
import { useState } from 'react';
import '../App.css'
 function Form({onAddItems}) {
    const [description, setDescription] = useState("");
    const [option , setOption] = useState(1)

    // react is all about immutability and you cant directly push it into the array 
    

    function handleSubmit(e) {
      e.preventDefault();

      if (!description) return ;

      const newItem = {
        description , option , packed : false , id : Date.now()
      }
      onAddItems(newItem)
      console.log(newItem);
      setDescription('')
      setOption(1)  
    }
  
  
  
    return (
      // the below whole thing is the form and yeah voilaa
      <form className=" gene add-form" onSubmit={handleSubmit}>
        <h3> What do you need 😍 for your trip ?</h3>
        <select 
        value={option}
        onChange={(e) =>{
          setOption((k)=> k = parseInt(e.target.value))
        }}>
         {/* i dont exactly understand this  */}
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option >
          ))}
        </select >
        <input
          type="text"
          placeholder="item..."
          value={description}  // the answer of your input boi although we use onChnge .. just to use the descrption 

          // using something called the onChnged() props lear more ...
          onChange={(e) => {
            //console.log(e.target.value);
            setDescription((k)=> k = e.target.value); // you are directly setting up a description as soon as you write something in the input box 
          }}

        />
        <button>Add</button>
      </form>
    ); 
  }
  

export default Form