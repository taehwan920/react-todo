import React from 'react';
import '../styles/test.css';
import ToDoBox from './ToDoBox';

class ControlToDo extends React.Component {

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
                        item={item}
                    ></ToDoBox>
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