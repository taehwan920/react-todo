import React from 'react';
import HelloName from './HelloName';
import YourName from './YourName';

export default class extends React.Component {
    render() {
        return (
            <header className="headerForName">
                {this.props.userName
                    ? <HelloName name={this.props.userName}></HelloName>
                    : <YourName
                        onSubmit={this.props.onSubmit}>
                    </YourName >}
            </header>
        )
    }
};