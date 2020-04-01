import React from 'react';

class HelloName extends React.Component {
    shouldComponentUpdate() {
        return (
            this.props.name
                ? false
                : true
        )
    }
    render() {
        return (
            <header className="helloName">
                Hello! {this.props.name}
            </header>
        )
    }
};

export default HelloName;