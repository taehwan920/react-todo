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
                                // console.log(e.target.parentElement.parentElement.dataset.id)
                                this.toggleInput(parseInt(e.target.parentElement.parentElement.dataset.id));
                            }.bind(this)}
                        >✍</span>
                        <span className="btn del-btn" role="img" aria-label="cross mark"
                            onClick={function (e) {
                                this.props.deleteToDo(parseInt(e.target.parentElement.parentElement.dataset.id));
                            }.bind(this)}
                        >❌</span>
                    </div>
                    <input className="updateBox" data-update={false} data-id={item.id} type="text" placeholder="wanna change?"
                        onSubmit={function (e) {
                            console.log(e.target.parentElement.parentElement.dataset.id)
                            // this.props.getToDo(parseInt(e.target.parentElement.parentElement.dataset.id));
                        }}
                    ></input>
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