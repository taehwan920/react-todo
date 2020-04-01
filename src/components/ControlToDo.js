import React from 'react';
import '../styles/test.css';

class ControlToDo extends React.Component {
    toggleInput = (_id) => {
        const getInput = Array.from(document.querySelectorAll('.updateBox'))
        const inputIdx = getInput.findIndex(item => parseInt(item.dataset.id) === _id);
        if (getInput[inputIdx].dataset.update === 'true') {
            getInput[inputIdx].classList.remove('actBox');
            getInput[inputIdx].dataset.update = 'false';
        } else {
            getInput[inputIdx].classList.add('actBox');
            getInput[inputIdx].dataset.update = 'true';
        }
    };

    render() {
        console.log('ReadToDo render')
        const arrToDos = this.props.data
        let toDoList = [];
        arrToDos.map(item =>
            toDoList.push(
                <li className="toDoBox" key={item.id} data-id={item.id}>
                    <div className="toDo" >
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
                    </div>
                    <form className="updateBox" data-update={false} data-id={item.id} action="/" method="post"
                        onSubmit={function (e) {
                            e.preventDefault();
                            this.toggleInput(parseInt(e.target.parentElement.dataset.id));
                            this.props.updateToDo(parseInt(e.target.parentElement.dataset.id), e.target.updateToDo.value);
                        }.bind(this)}>
                        <input name="updateToDo" type="text" placeholder="wanna change?"></input>
                    </form>
                </li >
            )
        );
        return (
            <article className="toDoList" >
                <ul>
                    {toDoList}
                </ul>
            </article>
        )
    }
};

export default ControlToDo;