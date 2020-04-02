import React from 'react';
import ToDoBox from './ToDoBox';

export default class extends React.Component {

    toggleInput = (_id) => {
        const getInput = Array.from(document.querySelectorAll('.updateBox'))
        const inputIdx = getInput.findIndex(item => parseInt(item.dataset.id) === _id);
        getInput[inputIdx].classList.toggle('actBox');
    };

    render() {
        const arrToDos = this.props.toDos;
        const toDoList = [];
        arrToDos
            ? arrToDos.map(item =>
                toDoList.push(
                    <ToDoBox
                        changeToDo={this.props.changeToDo}
                        toDos={this.props.toDos}
                        toggleInput={this.toggleInput}
                        item={item}
                    ></ToDoBox>
                )
            )
            : console.log('toDoList is empty!');

        return (
            <article className="toDoList" >
                <div className="toDoBoxContainer">
                    {toDoList}
                </div>
            </article>
        )
    }
};