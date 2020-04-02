import React from 'react';

class DeleteToDo extends React.Component {
    deleteToDo = (e) => {
        const _id = parseInt(e.target.parentElement.parentElement.dataset.id);
        const tempToDos = Array.from(this.props.toDos);
        const getToDoIdx = tempToDos.findIndex(item => item.id === _id);

        tempToDos.splice(getToDoIdx, 1);
        const parsedToDos = JSON.stringify(tempToDos);
        localStorage.setItem('TODOS', parsedToDos)

        const getToDos = JSON.parse(localStorage.getItem('TODOS'));
        this.props.onClick(getToDos);
    }

    render() {
        return (
            <span
                className="btn del-btn"
                role="img"
                aria-label="cross mark"
                onClick={
                    function (e) {
                        this.deleteToDo(e);
                    }.bind(this)}
            >❌</span>
        )
    }
};

export default DeleteToDo;

