import React from 'react';

class ReadToDo extends React.Component {
    render() {
        console.log('ReadToDo render')
        const arrData = this.props.data
        let toDoList = [];
        arrData.map(item =>
            toDoList.push(
                <li className="toDo" key={item.id}>
                    {item.toDo}
                    <span role="img" aria-label="writing hand" className="toDo_btn">✍</span>
                    <span role="img" aria-label="cross mark" className="toDo_btn">❌</span>
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

export default ReadToDo;