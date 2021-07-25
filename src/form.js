import React from 'react';

function Form() {
    const [input, setInput] = React.useState("");
    const [items, setItems] = React.useState([]);

    const handleInput = (e) => setInput(e.target.value);
    const add = () => {
        setItems([...items, input])
        setInput("");
    };
    const handleDelete = (e) => {
        const removed = [...items];
        removed.splice(e.target.value, 1);
        setItems(removed);
    }

    return (
        <div>
            <input type='text' onChange={handleInput} value={input} />
            <button onClick={add}> Add </button>
            <ul>
                {items.map((item, k) => <li key={k}> {item}<button onClick={handleDelete} value={k}> Delete </button> </li>)}
            </ul>

        </div>
    )
}
export default Form;