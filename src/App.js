import React from 'react';
import HelloName from './components/HelloName';
import YourName from './components/YourName';
import WriteToDo from './components/WriteToDo';
import ControlTodo from './components/ControlToDo';


class App extends React.Component {
    state = {
        userName: null,
        toDos: []
    }

    componentDidMount = () => {
        const getName = localStorage.getItem('NAME')
        if (getName !== null) {
            const parsedName = JSON.parse(getName);
            this.setState({
                userName: parsedName
            })
        } else {
            console.log('이름이 없음!')
        }
        const getToDos = localStorage.getItem('TODOS')
        if (getToDos !== null) {
            const parsedToDos = JSON.parse(getToDos);
            this.setState({
                toDos: parsedToDos
            })
        } else {
            console.log('텅 비었음!')
        }
    }

    isToDosChanged() {
        const getNewToDos = localStorage.getItem('TODOS');
        this.props.onSubmit(getNewToDos);
    }

    isRegistered() {
        if (this.state.userName) {
            return <HelloName name={this.state.userName}></HelloName>
        };
        return (
            <YourName
                onSubmit={
                    function (strName) {
                        this.setState({ userName: strName })
                    }.bind(this)}>
            </YourName >
        )

    }

    render() {
        const toDos = this.state.toDos;
        return (
            <main className="App">
                {this.isRegistered()}
                <WriteToDo
                    toDos={toDos}
                    isToDosChanged={this.isToDosChanged}
                    onSubmit={function (newToDo) {
                        this.setState({ toDos: newToDo })
                    }.bind(this)}></WriteToDo>
                <ControlTodo
                    data={toDos}
                    updateToDo={
                        function (_id, strToDo) {
                            const getToDoIdx = toDos.findIndex(item => item.id === _id);
                            const tempToDos = Array.from(toDos)
                            tempToDos[getToDoIdx].toDo = strToDo;
                            this.setState({ toDos: tempToDos })
                        }.bind(this)
                    }
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
