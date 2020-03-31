import React from 'react';

class HelloName extends React.Component {
    render() {
        return (
            <header className="helloName">
                Hello! {this.props.name}
            </header>
        )
    }
};

export default HelloName;