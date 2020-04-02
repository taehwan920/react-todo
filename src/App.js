import React from 'react';
import ControlTodo from './components/ControlToDo';
import WriteToDo from './components/WriteToDo';
import NamePart from './components/NamePart';


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

    render() {
        const toDos = this.state.toDos;
        return (
            <main className="App">
                <NamePart userName={this.state.userName}></NamePart>
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
