import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function AddItem({maxLength, handleSubmit, newItem, setNewItem}){
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="glist">
                <Form.Label>Add Grocery Item</Form.Label>
                <Form.Control 
                type="text" 
                controlId="add-item-input" 
                maxLength={maxLength}
                onChange={(e) => setNewItem(e.target.value)}
                value={newItem}
                required>
                </Form.Control>
            </Form.Group>
            <Button as="input" type="submit" value="Add Item"/>
        </Form>
    )
}

export default AddItem;