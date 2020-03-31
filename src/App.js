import React from 'react';



class WriteToDo extends React.Component {
  render() {
    return (
      <center className="centerForWriting">
        <form action="" className="WriteToDo">
          <label>
            What To Do!
            <input
              type="text"
              placeholder="What are you going to do today?"
            />
          </label>
        </form>
      </center>
    )
  }
}

class HelloName extends React.Component {
  render() {
    return (
      <header className="helloName">
        Hello! {this.props.name}
      </header>
    )
  }
}

class YourName extends React.Component {
  render() {
    return (
      <header className="headerForName">
        <form action="/" method="post" className="yourName" autoComplete="none"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(e.target.name.value);
          }.bind(this)}>
          <label>
            Name!
            <input type="text" placeholder="Your Name?" name="name" />
          </label>
        </form>
      </header >
    )
  }
}

class App extends React.Component {
  state = {
    userName: ""
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
