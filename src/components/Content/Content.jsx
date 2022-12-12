import React from "react";
import "./Content.css";
const Content = (props) => {
    return (
        <div className="content">
            {props.todos.map((item, index) => (
                <div className="card">
                    <img className="img" src={item.img} alt="" />
                    <h4>name:{item.name}</h4>
                    <h4>surname:{item.surname}</h4>
                    <h4>number:{item.number}</h4>
                    <button
                        className="btn"
                        onClick={() => props.handleDelete(item.id)}
                    >
                        delete
                    </button>
                    <button
                        className="btn"
                        onClick={() => props.handleEdit(index)}
                    >
                        edit
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Content;
