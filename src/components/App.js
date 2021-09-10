import React, { useState, uuid } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
//Because the state of items is set here (Apps.js) onItemFormSubmit needs to be passed as a callback function to this level. That way when onItemFormSubmit called when the itemForm sends the item object to the handleSubmit function it can update state for all children. The update to the array occurs at this level, not at the form level. So the data to be updated and used by children is collected in a child file and transported via callback functions set as props along the  path. Along the path the prop name and the value are set to the function (i.e. <ItemForm onItemFormSubmit={onItemFormSubmit}/> from ShoppingList). When the data has reached the file where state is set, then the function that handles that information is declared (i.e. handleSubmit) and the prop sent to the child that uses that data has the handler function as its value (i.e. <ShoppingList items={items} onItemFormSubmit={handleSubmit}/> from the Apps.js file).
  function handleSubmit (newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
