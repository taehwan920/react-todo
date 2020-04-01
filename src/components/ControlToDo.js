import React from 'react';
import '../styles/test.css';

class ControlToDo extends React.Component {

    toggleInput = (_id) => {
        const getInput = Array.from(document.querySelectorAll('.updateBox'))
        const inputIdx = getInput.findIndex(item => parseInt(item.dataset.id) === _id);
        getInput[inputIdx].classList.toggle('actBox');
    };

    render() {
        const arrToDos = this.props.arrData;
        const toDoList = [];
        if (arrToDos !== null) {
            arrToDos.map(item =>
                toDoList.push(
                    <div className="toDoBox" key={item.id} data-id={item.id}>
                        <li className="toDo" >
                            {item.toDo}
                            <span className="btn update-btn" role="img" aria-label="writing hand"
                                onClick={function (e) {
                                    this.toggleInput(parseInt(e.target.parentElement.parentElement.dataset.id));
                                }.bind(this)}
                            >✍</span>
                            <span className="btn del-btn" role="img" aria-label="cross mark"
                                onClick={function (e) {
                                    this.props.deleteToDo(parseInt(e.target.parentElement.parentElement.dataset.id));
                                }.bind(this)}
                            >❌</span>
                        </li>
                        <form className="updateBox" data-id={item.id} action="/" method="post"
                            onSubmit={function (e) {
                                e.preventDefault();
                                this.toggleInput(parseInt(e.target.parentElement.dataset.id));
                                this.props.updateToDo(parseInt(e.target.parentElement.dataset.id), e.target.updateToDo.value);
                            }.bind(this)}>
                            <input name="updateToDo" type="text" placeholder="wanna change?"></input>
                        </form>
                    </div >
                )
            );
        } else {
            console.log('toDoList is empty!');
        };

        return (
            <article className="toDoList" >
                {toDoList}
            </article>
        )
    }
};

export default ControlToDo;