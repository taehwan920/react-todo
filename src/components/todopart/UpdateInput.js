import React from 'react';

export default class extends React.Component {
    updateToDo = (e) => {
        const _id = parseInt(e.target.parentElement.dataset.id);
        const _content = e.target.updateToDo.value;
        const tempToDos = Array.from(this.props.toDos);
        const getToDoIdx = tempToDos.findIndex(item => item.id === _id);

        this.props.toggleInput(_id);
        tempToDos[getToDoIdx].toDo = _content;
        const parsedToDos = JSON.stringify(tempToDos);
        localStorage.setItem('TODOS', parsedToDos)

        const getToDos = JSON.parse(localStorage.getItem('TODOS'));
        this.props.onSubmit(getToDos);
    }

    render() {
        return (
            <form
                action="/"
                method="post"
                autoComplete="none"
                className="updateBox"
                data-id={this.props.toDoItem.id}
                onSubmit={
                    function (e) {
                        e.preventDefault();
                        this.updateToDo(e);
                    }.bind(this)}>
                <input
                    name="updateToDo"
                    className="updateInput"
                    type="text"
                    placeholder="wanna change?"></input>
            </form>
        )
    }
};

