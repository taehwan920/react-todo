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
        const getName = localStorage.getItem('NAME');
        const parsedName = JSON.parse(getName);

        getName
            ? this.setState({ userName: parsedName })
            : console.log('이름이 없음!')

        const getToDos = localStorage.getItem('TODOS');
        const parsedToDos = JSON.parse(getToDos);

        getToDos
            ? this.setState({ toDos: parsedToDos })
            : console.log('텅 비었음!')
    }

    isRegistered() {
        return (
            this.state.userName
                ? <HelloName name={this.state.userName}></HelloName>
                : <YourName
                    onSubmit={
                        function (strName) {
                            this.setState({ userName: strName })
                        }.bind(this)}>
                </YourName >)
    }

    render() {
        const toDos = this.state.toDos;
        return (
            <main className="App">
                {this.isRegistered()}
                <WriteToDo
                    toDos={toDos}
                    onSubmit={
                        function (newToDo) {
                            this.setState({ toDos: newToDo })
                        }.bind(this)}></WriteToDo>
                <ControlTodo
                    toDos={toDos}
                    changeToDo={
                        function (newToDos) {
                            this.setState({ toDos: newToDos });
                        }.bind(this)}
                ></ControlTodo>
            </main>
        )
    }
}

export default App;
