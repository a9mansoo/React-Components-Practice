import { FaPlusSquare } from "react-icons/fa";


function AddButton({ onAdd }){

    return (
        <FaPlusSquare id="add" role="button" onClick={onAdd}>Add an Item</FaPlusSquare>
    );
}

export default AddButton;
