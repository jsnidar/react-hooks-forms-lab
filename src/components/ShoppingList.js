import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, onSearchChange] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && search === '') {
      return true
    }else if(selectedCategory === 'All' && search !== '') {
      return item.name.toLowerCase().includes(search.toLowerCase());
    }else{
      return item.category === selectedCategory && item.name.toLowerCase().includes(search.toLowerCase());
    }
  }); 

  function handleFilterEvent(event) {
    onSearchChange(event.target.value)
   }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onSearchChange={handleFilterEvent} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
