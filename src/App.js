import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
function App() {
    const [todos, setCont] = useState([]);
    let [editTodo, setEditTodo] = useState({});
    const [modal, setModal] = useState(false);
    function addContact(newObj) {
        let newcontact = [...todos];
        newcontact.push(newObj);
        setCont(newcontact);
        console.log(newcontact);
    }
    function handleDelete(id) {
        let newcontact = todos.filter((item) => {
            return item.id !== id;
        });
        setCont(newcontact);
    }
    function handleEdit(index) {
        setModal(true);
        setEditTodo(todos[index]);
    }
    function handleClose() {
        setModal(false);
    }

    function handleSaveCont(newTask) {
        const newTodos = todos.map((item) => {
            if (item.id === newTask.id) {
                return newTask;
            }
            return item;
        });
        setCont(newTodos);
        handleClose();
    }
    return (
        <div className="main">
            <Header />
            <Sidebar handleCont={addContact} />
            <Content
                todos={todos}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
            {modal ? (
                <Modal
                    handleSaveCont={handleSaveCont}
                    editTodo={editTodo}
                    handleClose={handleClose}
                />
            ) : null}
        </div>
    );
}

export default App;
