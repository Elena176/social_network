import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';
import {UserType} from '../../redux/Types';


type UsersFunctionComponentPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    followingInProgress: number[]

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
                            ? <button disabled={props.followingInProgress.some((id: number) => id === u.id)} onClick={() => {props.unFollow(u.id)}}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some((id: number) => id === u.id)} onClick={() => {props.follow(u.id)}}>Follow</button>
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
