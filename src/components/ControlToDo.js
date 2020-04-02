import React from 'react';
import '../styles/test.css';

class ControlToDo extends React.Component {

    toggleInput = (_id) => {
        const getInput = Array.from(document.querySelectorAll('.updateBox'))
        const inputIdx = getInput.findIndex(item => parseInt(item.dataset.id) === _id);
        getInput[inputIdx].classList.toggle('actBox');
    };

    deleteToDo = (e) => {
        const _id = parseInt(e.target.parentElement.parentElement.dataset.id);
        const tempToDos = Array.from(this.props.toDos);
        const getToDoIdx = tempToDos.findIndex(item => item.id === _id);

        tempToDos.splice(getToDoIdx, 1);
        const parsedToDos = JSON.stringify(tempToDos);
        localStorage.setItem('TODOS', parsedToDos)

        const getToDos = JSON.parse(localStorage.getItem('TODOS'));
        this.props.changeToDo(getToDos);
    }

    updateToDo = (e) => {
        const _id = parseInt(e.target.parentElement.dataset.id);
        const _content = e.target.updateToDo.value;
        const tempToDos = Array.from(this.props.toDos);
        const getToDoIdx = tempToDos.findIndex(item => item.id === _id);

        this.toggleInput(_id);
        tempToDos[getToDoIdx].toDo = _content;
        const parsedToDos = JSON.stringify(tempToDos);
        localStorage.setItem('TODOS', parsedToDos)

        const getToDos = JSON.parse(localStorage.getItem('TODOS'));
        this.props.changeToDo(getToDos);
    }

    render() {
        const arrToDos = this.props.toDos;
        const toDoList = [];
        arrToDos
            ? arrToDos.map(item =>
                toDoList.push(
                    <div
                        className="toDoBox"
                        key={item.id}
                        data-id={item.id}>
                        <li className="toDo" >
                            {item.toDo}
                            <span
                                className="btn update-btn"
                                role="img"
                                aria-label="writing hand"
                                onClick={
                                    function (e) {
                                        this.toggleInput(parseInt(e.target.parentElement.parentElement.dataset.id));
                                    }.bind(this)}
                            >✍</span>
                            <span
                                className="btn del-btn"
                                role="img"
                                aria-label="cross mark"
                                onClick={
                                    function (e) {
                                        this.deleteToDo(e);
                                    }.bind(this)}
                            >❌</span>
                        </li>
                        <form
                            action="/"
                            method="post"
                            autoComplete="none"
                            className="updateBox"
                            data-id={item.id}
                            onSubmit={
                                function (e) {
                                    e.preventDefault();
                                    this.updateToDo(e);
                                }.bind(this)}>
                            <input
                                name="updateToDo"
                                type="text"
                                placeholder="wanna change?"></input>
                        </form>
                    </div >
                )
            )
            : console.log('toDoList is empty!');

        return (
            <article className="toDoList" >
                {toDoList}
            </article>
        )
    }
};

export default ControlToDo;