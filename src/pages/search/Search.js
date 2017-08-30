import React from 'react';
import { Link } from 'react-router-dom'
import throttle from 'lodash.throttle'
import UsersGrid from '../../organisms/users-grid'

const styles = {
    searchBar: {
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 5,
        display: 'flex',
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 0 6px rgba(0,0,0,0.23)',
    },
    searchInputWrapper: {
        flex: 1,
        background: '#e9e',
    },
    searchInput: {
        width: '100%',
        padding: '15px 10px',
        fontSize: '1.25em',
        border: 'none',
        outline: 'none',
    },
    closeSearch : {
        display: 'block',
        top: 20,
        left: 15,
        width: 50,
        height: 53,
        background: 'white',
        backgroundImage: "url('icons/arrow-back.svg')",
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
        backgroundSize: 28,
        fontSize: 0,
    },
    searchResults: {
        padding: '80px 10px 20px',
    }
}

class Search extends React.Component{

    constructor() {
        super();

        this.state = {
            users: [],
            query: ''
        };

        this.onUserClicked = this.onUserClicked.bind(this);
    }

    execSearch = (query) => {
        const search = this.currentSearch = fetch(`https://api.github.com/search/users?q=${query}`)
            .then(res => res.json())
            .then(data => {
                // setState only for the current search result.
                if (this.currentSearch === search)
                    this.setState({ users: data.items })
            });
    }

    updateQuery(query) {
        this.currentSearch = null

        if (query)
            this.execSearch(query)

        this.setState({
            users: [],
            query
        })
    }

    componentDidMount() {
        this.input.focus()

        this.execSearch = throttle(this.execSearch, 1000, {
          leading: false,
          trailing: true
        })
        const { query } = this.state

        if (query)
            this.execSearch(query)
    }

    onUserClicked(user) {
        this.props.history.push(`/user/${user.login}`);
    }

    render() {
        const { query, users } = this.state

        return (
            <div>
                <div style={styles.searchBar}>
                    <Link style={styles.closeSearch} to="/">Close</Link>

                    <div style={styles.searchInputWrapper}>
                        <input
                        type="text"
                        value={query}
                        onChange={event => this.updateQuery(event.target.value)}
                        style={styles.searchInput}
                        ref={node => this.input = node}
                        placeholder="Search by user name"
                        />
                    </div>
                </div>

                <div style={styles.searchResults}>
                    <UsersGrid
                       users={users}
                       onUserClicked={this.onUserClicked}
                    />
                </div>
            </div>
        );
    }
}

export default Search;