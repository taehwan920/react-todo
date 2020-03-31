import React from 'react';

class YourName extends React.Component {
    render() {
        return (
            < header className="headerForName" >
                <p>ssdflj</p>
                <form action="/" className="yourName" autoComplete="none">
                    <label>
                        <input type="text" placeholder="Your Name?" />
                    </label>
                </form >
            </header >
        )
    }
}

class WriteToDo extends React.Component {
    render() {
        return (
            <center className="centerForWriting">
                <form action="/" className="WriteToDo">
                    <label>
                        <input type="text" placeholder="What are you going to do today?" />
                    </label>
                </form>
            </center>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <YourName></YourName>
                <WriteToDo></WriteToDo>
            </div>
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
