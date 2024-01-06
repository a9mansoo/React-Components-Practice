import logo from './logo.svg';
import './App.css';
import ItemList from './ItemList';
import Footer from './Footer';
import AddButton from './AddButton';
import AddItem from './AddItem';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


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
  const [addState, setAddState] = useState(false);
  const [newItem, setNewItem] = useState('');

  const onChecked = (id) => {
    console.log(id)
    const newItemState = itemState.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
    setItemState(newItemState);

  }

  const onDelete = (id) => {
    const newItemState = itemState.filter((item) => item.id === id ? null: item);
    setItemState(newItemState);
  }

  const onAdd = () => {
    setAddState(!addState);

  }

  const handleSubmit = (e) => {
    console.log("Submitting")
    e.preventDefault();
    console.log(e.target)
    let itemId = itemState.length ? itemState[itemState.length-1].id++ : 1;
    console.log(itemId)
    let itemList = [...itemState, {id: itemId,
                  value: newItem,
                  checked: false}];
    setItemState(itemList);
    setAddState(!addState);
    setNewItem('');

  }


  return (
    <div className="App">
      <header className="header">
        <h1>Grocery List</h1>
      </header>
      <AddButton onAdd={onAdd}/>
      {addState ? <AddItem maxLenght="100" handleSubmit={handleSubmit} newItem={newItem} setNewItem={setNewItem}/> : null}
      <ItemList items={itemState} onChange={onChecked} onDelete={onDelete}/>
      <Footer items={itemState}/>
    </div>
  );
}

export default App;
