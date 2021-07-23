import React from 'react';
import {UsersPropsType} from './UcersContainer';
import s from './users.module.css';

const Users: React.FC<UsersPropsType> = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511823_2.jpg',
                followed: true,
                fullName: 'Elena',
                status: 'I am so pretty',
                location: {city: 'Odessa', country: 'Ukraine'}
            },
            {
                id: 2, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511804_3.jpg',
                followed: true, fullName: 'Denis', status: 'I am a boss', location: {city: 'Odessa', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511823_2.jpg',
                followed: false,
                fullName: 'Natasha',
                status: 'I am a grandma',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 4,
                photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511823_2.jpg',
                followed: true,
                fullName: 'Nastya',
                status: 'I am so pretty too',
                location: {city: 'Vienna', country: 'Austria'}
            },
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt={''} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
                </div>
            )
        }
    </div>
};

export default Users;
