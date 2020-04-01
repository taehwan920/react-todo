import React from 'react';

class HelloName extends React.Component {
    shouldComponentUpdate() {
        if (this.props.name) {
            return false;
        }
        return true;
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