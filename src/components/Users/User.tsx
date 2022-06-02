import React from 'react';
import {NavLink} from 'react-router-dom';
import userPhoto from '../../assets/images/user.png';
import s from './users.module.css';
import {UserType} from '../../redux/Types';

type UserPropsType = {
  user: UserType
  followingInProgress: number[]
  unFollow: (userId: number) => void
  follow: (userId: number) => void
}
export let User: React.FC<UserPropsType> = ({user, followingInProgress, unFollow, follow}) => {
  return (
    <div>
      <div>
    <span>
      <div>
        <NavLink to={'/profile/' + user.id}>
    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt={''}
         className={s.userPhoto}/>
  </NavLink>
  </div>
  <div>
  {user.followed
    ? <button disabled={followingInProgress.some((id: number) => id === user.id)}
              onClick={() => {
                unFollow(user.id)
              }}>Unfollow</button>
    : <button disabled={followingInProgress.some((id: number) => id === user.id)}
              onClick={() => {
                follow(user.id)
              }}>Follow</button>
  }
    </div>
    </span>
        <span>
    <span>
      <div>{user.name}</div>
    <div>{user.status}</div>
    </span>
          {/* <span>
                        <div>{'user.location.city'}</div>
                        <div>{'user.location.country'}</div>
                    </span>*/}
    </span>
      </div>
      )
    </div>
  )
}
