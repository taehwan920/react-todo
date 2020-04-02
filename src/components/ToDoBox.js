import React from 'react';
import DeleteToDo from './DeleteToDo';
import UpdateBtn from './UpdateBtn';
import UpdateInput from './UpdateInput';


export default class extends React.Component {
    render() {
        const item = this.props.item
        return (
            <div
                className="toDoBox"
                key={item.id}
                data-id={item.id}>
                <li className="toDo" >
                    {item.toDo}
                    <UpdateBtn onClick={this.props.toggleInput}></UpdateBtn>
                    <DeleteToDo
                        toDos={this.props.toDos}
                        onClick={this.props.changeToDo}></DeleteToDo>
                </li>
                <UpdateInput
                    toDos={this.props.toDos}
                    toDoItem={item}
                    onSubmit={this.props.changeToDo}
                    toggleInput={this.props.toggleInput}
                ></UpdateInput>
            </div >
        )
    }
};