import React, { useState }from "react";
import { v4 as uuid } from "uuid";

function ItemForm( { onItemFormSubmit }) {
  const [itemName, setItemName] = useState ('');
  const [itemCategory, setNewCategory] = useState ('Produce')
  
  function handleNameChange(event){
    setItemName(event.target.value)
  }

  function handleCatChange(event) {
    setNewCategory(event.target.value)
  }
 
  function handleSubmit (event) {
    event.preventDefault()
    onItemFormSubmit({
      id: uuid(),
      name: itemName,
      category: itemCategory,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" onChange={handleNameChange} value={itemName} name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleCatChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
