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
            <div className="helloName">
                hello, {this.props.name}!
            </div>
        )
    }
};

export default HelloName;