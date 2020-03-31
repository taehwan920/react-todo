import React from 'react';
import HelloName from './components/HelloName';
import YourName from './components/YourName';


class WriteToDo extends React.Component {
    render() {
        return (
            <center className="centerForWriting">
                <form action="" className="WriteToDo">
                    <label>
                        What To Do!
                        <input type="text" placeholder="What are you going to do today?" />
                    </label>
                </form>
            </center>
        )
    }
}

class ReadToDo extends React.Component {
    render() {
        console.log('ReadToDo render')
        const arrData = this.props.data
        let toDoList = [];
        arrData.map(item =>
            toDoList.push(
                <li className="toDo" data-id={item.id}>
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
}

class App extends React.Component {
    state = {
        userName: null,
        toDos: [
            {
                id: 1,
                toDo: 'Complete this project'
            },
            {
                id: 2,
                toDo: 'Complete Read functions'
            }
        ]
    }

    isRegistered() {
        if (this.state.userName) {
            return <HelloName name={this.state.userName}></HelloName>
        };
        return <YourName onSubmit={
            function (str_name) {
                this.setState({ userName: str_name })
            }.bind(this)
        }></YourName >
    }

    render() {
        return (
            <main className="App">
                {this.isRegistered()}
                <WriteToDo></WriteToDo>
                <ReadToDo data={this.state.toDos}></ReadToDo>
            </main>
        )
    }
}

//이름 입력할 form
//input
//todo입력할 form 
//input
//이름이 입력됐을 때 인사 문구 출력하는 영역
//todo가 입력됐을 떄 todo 리스트 출력하는 영역(RUD 구현)


export default App;
