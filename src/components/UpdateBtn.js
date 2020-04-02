import React from 'react';

class UpdateBtn extends React.Component {
    render() {
        return (
            <span
                className="btn update-btn"
                role="img"
                aria-label="writing hand"
                onClick={
                    function (e) {
                        const _id = parseInt(e.target.parentElement.parentElement.dataset.id)
                        this.props.onClick(_id);
                    }.bind(this)}
            >✍</span>
        )
    }
};

export default UpdateBtn;