import React from 'react';

class WriteToDo extends React.Component {
    render() {
        return (
            <center className="centerForWriting">
                <form action="/" method="post" className="WriteToDo" autoComplete="none"
                    onSubmit={function (e) {
                        e.preventDefault();
                        this.props.onSubmit(e.target.WriteToDo.value);
                        e.target.WriteToDo.value = '';
                    }.bind(this)}>
                    <label>
                        What To Do?
                        <input name="WriteToDo" type="text" placeholder="What are you going to do today?" />
                    </label>
                </form>
            </center>
        )
    }
};

export default WriteToDo;