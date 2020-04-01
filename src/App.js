import React from 'react';
import HelloName from './components/HelloName';
import YourName from './components/YourName';
import WriteToDo from './components/WriteToDo';
import ControlTodo from './components/ControlToDo';


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
                toDo: 'Complete Update functions'
            },
            {
                id: 3,
                toDo: 'lalalal'
            }
        ]
    }

    isRegistered() {
        if (this.state.userName) {
            return <HelloName name={this.state.userName}></HelloName>
        };
        return <YourName
            onSubmit={
                function (strName) {
                    this.setState({ userName: strName })
                }.bind(this)}>
        </YourName >
    }

    render() {
        const toDos = this.state.toDos;
        return (
            <main className="App">
                {this.isRegistered()}
                <WriteToDo onSubmit={function (strToDo) {
                    const newToDo = {
                        id: toDos.length + 1,
                        toDo: strToDo
                    }
                    const addNewToDo = toDos.concat(newToDo);
                    this.setState({ toDos: addNewToDo })
                }.bind(this)}></WriteToDo>
                <ControlTodo
                    data={toDos}
                    deleteToDo={
                        function (_id) {
                            const getToDo = toDos.findIndex(item => item.id === _id);
                            const tempToDos = Array.from(toDos);
                            tempToDos.splice(getToDo, 1);
                            this.setState({ toDos: tempToDos });
                        }.bind(this)
                    }
                ></ControlTodo>
            </main>
        )
    }
}

//todo가 입력됐을 떄 todo 리스트 출력하는 영역(RUD 구현)


export default App;
