// import React from "react";
import "./Sidebar.css";
import React, { useState } from "react";

const Sidebar = ({ handleCont }) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    
    const [surname, setSurname] = useState("");
    const nameInput = (e) => {
        setName(e.target.value);
    };
    const surnameInput = (e) => {
        setSurname(e.target.value);
    };
    const numberInput = (e) => {
        setNumber(e.target.value);
    };
   
    const handleAdd = () => {
        if (!name.trim() || !surname.trim() || !number.trim() ) {
            alert("заполните все поля Айзирек");
            return;
        }
        const newcontact = {
            name: name,
            surname: surname,
            number: number,
            id: Date.now(),
        };

        handleCont(newcontact);
        setName("");
        setSurname("");
        setNumber("");
       
    };
    return (
        <div className="sidebar">
            <h1>Создать контакт</h1>
            <input
                value={name}
                type="text"
                className="inp"
                onChange={nameInput}
                placeholder="имя"
            />
            <input
                value={surname}
                type="text"
                className="inp"
                onChange={surnameInput}
                placeholder="фамилия"
            />
            <input
                value={number}
                type="number"
                className="inp"
                onChange={numberInput}
                placeholder="номер"
            />
            
            
            <button onClick={handleAdd} className="btn-add">
                добавлять
            </button>
        </div>
    );
};

export default Sidebar;
