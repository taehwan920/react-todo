import React from "react";

export default class extends React.Component {
    shouldComponentUpdate() {
        return (
            this.props.name
                ? true
                : false
        )
    }

    onSubmit(e) {
        const userName = JSON.stringify(e.target.name.value);
        localStorage.setItem('NAME', userName);

        const getUserName = JSON.parse(localStorage.getItem('NAME'));
        this.props.onSubmit(getUserName);
    }

    render() {
        return (
            <form
                action="/"
                method="post"
                autoComplete="none"
                className="yourName"
                onSubmit={
                    function (e) {
                        e.preventDefault();
                        this.onSubmit(e);
                    }.bind(this)}>
                <input
                    name="name"
                    type="text"
                    autoComplete="off"
                    placeholder="name?"
                    className="nameInput"
                />
                <button
                    className="submitBtn"
                    type="submit">✔</button>
            </form>
        )
    }
};