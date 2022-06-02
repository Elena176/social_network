import React from 'react';
import {UserType} from '../../redux/Types';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User';

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
      <div>
      {
        users.map(u => <User key={u.id}
                             user={u}
                             follow={follow}
                             unFollow={unFollow} followingInProgress={followingInProgress}
          />
        )
      }
      </div>
    </div>
  )
}
