import React, { Component } from 'react';

class User extends Component {

    state = {
        user : {}
    }

    componentDidMount() {
        const { username } = this.props.match.params;

        fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
            this.setState({ user: data })
        });
    }

    render() {
        const { user } = this.state;
        return (
            <div style={styles.container}>
                <img style={styles.profileImg} src={user.avatar_url} alt="" />
                <div style={styles.profileText}>
                    <h1 style={styles.profileName}>{user.name}</h1>
                    <span style={styles.profileTitle}> {user.bio} </span>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        maxWidth: '15em',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '2em',
        backgroundColor: '#f2f2f2',
        color: '#444',
        fontFamily: "'Lato', sans-serif",
        fontWeight: '300',
        lineHeight: 1,
        textAlign: 'center',
    },
    profileImg: {
        display: 'block',
        height: '7em',
        marginRight: 'auto',
        marginLeft: 'auto',
        border: '.5em solid #f2f2f2',
        borderRadius: '100%',
        boxShadow:  '0 1px 0 0 rgba(0,0,0,.1)',
    },
    profileText: {
        marginTop: '-3.5em',
        padding: '5em 1.5em 1.5em 1.5em',
        background: 'white',
        borderRadius: 3,
        boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
    },
    profileName:{
        marginRight: '-1em',
        marginBottom: '.75em',
        marginLeft: '-1em',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        paddingBottom: '.75em',
        fontSize: '1.5em',
        textTransform: 'uppercase',
    },
    profileTitle:{
        color: '#ccc',
    }
}

export default User;