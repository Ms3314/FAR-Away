import { useState } from 'react';
import Form from  './components/Form.jsx'
import Logo from './components/Logo.jsx';
import PackingList from './components/PackingList.jsx';
import Stats from './components/Stats.jsx';
import './App.css'

export default function App() {
  const [items , setItem ] = useState([])
  const handleDelete = (id) => {
    setItem(items => items.filter(item => item.id !== id))
  }
  
  function handleAddItems(item) {
    setItem((items) => [...items , item] )
  }

  function handleClear () {
      if (items.length === 0) {
        alert("Please enter items");
      } else {
        const confirm = window.confirm("Do you really want to delete all items?");
        if (confirm) setItem([]);
      }
    
  }

  function handleToggleItem (id) {
    //// this has soo many concept into it , pretty intresting thing this function is 
    setItem(items => items.map(insideitem => insideitem.
    // here we are checking if the object has a property as packed .. and changee it as per need 
    // here we map through the items giving us each item and then we check and search for the ite with the id we want 
    id === id ?
    // as we get it what we do is we use the ... for the rest of the content in the object , then we go to packed and turn it opposite to its prev value 
    {...insideitem , packed : !insideitem.packed} : 
    // or if the id not match dont do any change 
    insideitem ));
  }

  return (

    <div className="app">
      <Logo />
      <Form onAddItems = {handleAddItems} />
      <PackingList items={items} hansetItem={handleClear} handleDelete = {handleDelete} onToggleItems = {handleToggleItem}/>
      <Stats items={items} />
    </div>
  );
}








