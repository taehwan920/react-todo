import React from 'react';

class WriteToDo extends React.Component {
    onSubmit(e) {
        const toDos = this.props.toDos;
        const newToDo = {
            id: toDos.length + 1,
            toDo: e.target.WriteToDo.value
        }
        const tempToDos = Array.from(toDos);
        tempToDos.push(newToDo);
        const parsedToDos = JSON.stringify(tempToDos);
        localStorage.setItem('TODOS', parsedToDos);

        e.target.WriteToDo.value = '';

        this.props.isToDosChanged();
    }

    render() {
        return (
            <center className="centerForWriting">
                <form action="/" method="post" className="WriteToDo" autoComplete="none"
                    onSubmit={function (e) {
                        e.preventDefault();
                        this.onSubmit(e);
                    }.bind(this)}>
                    <label>
                        What To Do?
                        <input name="WriteToDo" type="text" placeholder="What are you going to do today?" />
                    </label>
                </form>
            </center>
        )
    }
};

export default WriteToDo;