import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <span
                className="btn update-btn"
                role="img"
                aria-label="writing hand"
                onClick={
                    function (e) {
                        const _id = parseInt(e.target.parentElement.parentElement.parentElement.dataset.id)
                        this.props.toggleInput(_id);
                    }.bind(this)}
            >✍</span>
        )
    }
};