import React from "react";
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {

        props.setUsers([
                {
                    id: 1,
                    photoURL: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1956&q=80',
                    followed: true,
                    fullName: 'Dmitry',
                    status: 'Где-то не в себе...',
                    location: {city: 'Malaga', country: 'Spain'}
                },
                {
                    id: 2,
                    photoURL: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1956&q=80',
                    followed: false,
                    fullName: 'Vasya',
                    status: 'В себе, но не где-то...',
                    location: {city: 'Питер', country: 'Россия'}
                },
                {
                    id: 3,
                    photoURL: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1956&q=80',
                    followed: true,
                    fullName: 'Иван Петрович',
                    status: 'Бездельники опять тут...',
                    location: {city: 'Морква', country: 'Красная площадь'}
                }
            ]
        )
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoURL} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => (props.unfollow(u.id))}>Unfollow</button>
                            : <button onClick={() => (props.follow(u.id))}>Follow</button>}
                    </div>


                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>

            </div>)
        }
    </div>
}

export default Users;