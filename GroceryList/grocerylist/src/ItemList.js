import { FaTrashCan } from "react-icons/fa6";

function ItemList({items, onChange, onDelete}){

    return (
        <main>
        <ul className="items-list">
        {items.map(
            (item) =>
            <li className="list-item" key={item.id}>
            <input type="checkbox" onChange={() => onChange(item.id)} checked={item.checked}/>
            <label style={item.checked? {"textDecoration": "line-through"} : {}} onDoubleClick={() => onChange(item.id)}>{item.value}</label>
            <FaTrashCan 
            onClick={() => onDelete(item.id)}
            role="button"
            tabIndex="0"/>
            </li>
            
        )}
        </ul>
        </main>
    )
}

export default ItemList;