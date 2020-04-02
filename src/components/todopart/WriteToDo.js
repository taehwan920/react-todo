import React from 'react';

export default class extends React.Component {
    onSubmit(e) {
        const wroteValue = e.target.writeToDo.value;
        if (wroteValue) {
            const toDos = this.props.toDos;
            const newToDo = {
                id: toDos.length + 1,
                toDo: wroteValue
            }
            const tempToDos = Array.from(toDos);
            tempToDos.push(newToDo);
            const parsedToDos = JSON.stringify(tempToDos);
            localStorage.setItem('TODOS', parsedToDos);

            e.target.writeToDo.value = '';

            const getToDos = JSON.parse(localStorage.getItem('TODOS'));
            this.props.onSubmit(getToDos);
        } else {
            console.log('write something')
        }
    }

    render() {
        return (
            <center className="centerForWriting">
                <form
                    action="/"
                    method="post"
                    autoComplete="none"
                    className="writeToDo"
                    onSubmit={
                        function (e) {
                            e.preventDefault();
                            this.onSubmit(e);
                        }.bind(this)}>
                    <input
                        className="writeInput"
                        name="writeToDo"
                        type="text"
                        autoComplete="off"
                        placeholder="to do?"
                    />
                    <button
                        className="submitBtn"
                        type="submit"
                    >✔</button>
                </form>
            </center>
        )
    }
};