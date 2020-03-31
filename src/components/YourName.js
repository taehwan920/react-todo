import React from "react";

class YourName extends React.Component {
    render() {
        return (
            <header className="headerForName">
                <form action="/" method="post" className="yourName" autoComplete="none"
                    onSubmit={function (e) {
                        e.preventDefault();
                        this.props.onSubmit(e.target.name.value);
                    }.bind(this)}>
                    <label>
                        Name!
              <input type="text" placeholder="Your Name?" name="name" />
                    </label>
                </form>
            </header >
        )
    }
};

export default YourName;