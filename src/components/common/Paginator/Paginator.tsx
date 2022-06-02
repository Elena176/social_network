import s from './Paginator.module.css';
import React from 'react';

type PaginatorPropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (p: number) => void
}

export let Paginator: React.FC<PaginatorPropsType> = ({totalUsersCount, currentPage, pageSize, onPageChanged}) => {
  let pagesCount = totalUsersCount / pageSize

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    <div>
      {pages.map(p => {
        return <span className={currentPage === p ? s.selectedPage : ''}
                     onClick={() => {
                       onPageChanged(p)
                     }}
        >{p}</span>
      })}
    </div>
  </div>
}