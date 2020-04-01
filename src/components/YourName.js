import React from "react";

class YourName extends React.Component {
    shouldComponentUpdate() {
        if (!this.props.name) {
            return false;
        }
        return true;
    }

    onSubmit(e) {
        const userName = JSON.stringify(e.target.name.value);
        localStorage.setItem('NAME', userName);
        const getUserName = JSON.parse(localStorage.getItem('NAME'));
        this.props.onSubmit(getUserName);
    }

    render() {
        return (
            <header className="headerForName">
                <form action="/" method="post" className="yourName" autoComplete="none"
                    onSubmit={function (e) {
                        e.preventDefault();
                        this.onSubmit(e);
                    }}>
                    <label>
                        Name?
              <input name="name" type="text" placeholder="Your Name?" />
                    </label>
                </form>
            </header >
        )
    }
};

export default YourName;