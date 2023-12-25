import logo from './logo.svg';
import './App.css';
import ItemList from './ItemList';
import Footer from './Footer';
import { useState } from 'react';


function App() {
  const [itemState, setItemState] = useState([{id: 1,
  value: "Get 2 pounds of Chicken",
  checked: false},
  {id: 2,
  value: "Get bananas",
  checked: true},
  {id: 3,
  value: "Get Bread",
  checked: false}])

  const onChecked = (id) => {
    console.log(id)
    const newItemState = itemState.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
    setItemState(newItemState);

  }

  const onDelete = (id) => {
    const newItemState = itemState.filter((item) => item.id === id ? null: item);
    setItemState(newItemState);
  }


  return (
    <div className="App">
      <header className="header">
        <h1>Grocery List</h1>
      </header>
      <ItemList items={itemState} onChange={onChecked} onDelete={onDelete}/>
      <Footer items={itemState}/>
    </div>
  );
}

export default App;
