import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';
import {UserType} from '../../redux/Types';
import {Paginator} from '../common/Paginator/Paginator';

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

export let UsersFunctionComponent: React.FC<UsersFunctionComponentPropsType> = ({currentPage,
                                                                                  onPageChanged,
                                                                                  pageSize,
                                                                                  totalUsersCount,
                                                                                  users,
                                                                                  followingInProgress,
                                                                                  unFollow,
                                                                                  follow
                                                                                }) => {
  return (
    <div>
      <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize}
                   totalUsersCount={totalUsersCount}/>
      </div>
      {
        users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={''}
                             className={s.userPhoto}/>
                            </NavLink>
                    </div>
                    <div>
                        {u.followed
                          ? <button disabled={followingInProgress.some((id: number) => id === u.id)}
                                    onClick={() => {
                                      unFollow(u.id)
                                    }}>Unfollow</button>
                          : <button disabled={followingInProgress.some((id: number) => id === u.id)}
                                    onClick={() => {
                                      follow(u.id)
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
