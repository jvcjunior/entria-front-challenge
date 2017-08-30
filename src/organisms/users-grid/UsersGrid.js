import React from 'react'
/*



  .book-title,
  .book-authors {
    font-size: 0.8em;
  }
  .book-title {
    margin-top: 10px;
  }
  .book-authors {
    color: #999;
  }

  .book-top {
    position: relative;
    height: 200px;
    display: flex;
    align-items: flex-end;
  }

  .book-shelf-changer {
    position: absolute;
    right: 0;
    bottom: -10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #60ac5d;
    background-image: url('./icons/arrow-drop-down.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
  .book-shelf-changer select {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
  */
const styles = {
    grid: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    gridListItem: {
        padding: '10px 15px',
        textAlign: 'left',
    },
    user:{
        width: 140,
        cursor: 'pointer'
    },
    userImage:{
        width: 140,
        height:140
    },
    userName: {
        fontSize: '0.8em',
        marginTop: 10,
    }
}

const UsersGrid = ({ users, onUserClicked }) => (
    <ol style={styles.grid} className="books-grid">
        {users.map(user => (
        <li style={styles.gridListItem} key={user.id}>
            <div style={styles.user} onClick={() => onUserClicked(user)}>
                <div className="book-top">
                    {/*<BookCover book={book}/>*/}
                    {/*<div className="book-shelf-changer">
                    <select
                        value={book.shelf}
                        onChange={event => onBookShelfChange(book, event.target.value)}
                    >
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        {book.shelf !== 'none' && <option value="none">None</option>}
                    </select>
                    </div>*/}
                </div>
                <img src={user.avatar_url} style={styles.userImage} alt="" />
                <div style={styles.userName}>{user.login}</div>
            </div>
        </li>
        ))}
    </ol>
);

export default UsersGrid