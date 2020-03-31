import React from 'react';

class ControlToDo extends React.Component {
    render() {
        console.log('ReadToDo render')
        const arrToDos = this.props.data
        let toDoList = [];
        arrToDos.map(item =>
            toDoList.push(
                <li className="toDo" key={item.id} data-id={item.id}>
                    {item.toDo}
                    <span className="update-btn" role="img" aria-label="writing hand" >✍</span>
                    <span className="del-btn" role="img" aria-label="cross mark"
                        onClick={function (e) {
                            this.props.deleteToDo(parseInt(e.target.parentElement.dataset.id));
                        }.bind(this)}
                    >❌</span>
                </li>
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