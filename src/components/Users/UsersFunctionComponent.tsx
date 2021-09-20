import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';
import {UserType} from '../../redux/store';
import {followAPI, unFollowAPI} from '../../api/api';

type UsersFunctionComponentPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}
export let UsersFunctionComponent = (props: UsersFunctionComponentPropsType) => {

    let pagesCount = props.totalUsersCount / props.pageSize

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p ? s.selectedPage : ''}
                                     onClick={() => {
                                         props.onPageChanged(p)
                                     }}
                        >{p}</span>
                    })
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={''}
                             className={s.userPhoto}/>
                            </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                unFollowAPI.deleteUser(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    });

                            }}>Unfollow</button>
                            : <button onClick={() => {
                                followAPI.followUser(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    });
                            }}>Follow</button>
                        }
                    </div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                            {/* <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </span>*/}
                </span>
                    </div>
                )
            }
        </div>
    )
}
