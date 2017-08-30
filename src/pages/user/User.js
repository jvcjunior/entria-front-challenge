import React, { Component } from 'react';

class User extends Component {

    render() {
        const { username } = this.props.match.params;
        return (
            <div>{username}</div>
        );
    }
}

export default User;