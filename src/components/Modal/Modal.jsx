import React, { useState } from "react";
import "./Modal.css";
const Modal = (props) => {
    let [item, setItem] = useState(props.editTodo);
    
    function editName(e) {
        let newobj = { ...item,  name: e.target.value};
        setItem(newobj);
    }
    function editSurname(e) {
        let newobj = { ...item,  surname: e.target.value};
        console.log(newobj);
        setItem(newobj);
    }
    function editNumber(e) {
        let newobj = { ...item,  number: e.target.value};
        setItem(newobj);
    }
   
    function handleSave() {
        props.handleSaveCont(item);
    }
    return (
        <div className="main-edit-block">
            <div className="edit-block">
                <h1>edit</h1>
                <div className="input-block">
                    <input
                        onChange={editName}
                        value={item.name}
                        type="text"
                        className="input"
                        placeholder="name"
                    />
                    <input
                        onChange={(e) => console.log(e.target.value)}
                        value={'sancho'}
                        type="text"
                        className="input"
                        placeholder="surname"
                    />
                    <input
                        onChange={editNumber}
                        value={item.number}
                        type="number"
                        className="input"
                        placeholder="number"
                    />
                    
                </div>
                <div className="btn-block">
                    <button onClick={handleSave}>save</button>
                    <button onClick={() => props.handleClose()}>close</button>
                    <button onClick={()=> props.handleClose()}></button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
