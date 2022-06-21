import s from './Paginator.module.css';
import React, {useState} from 'react';
import cn from 'classnames';

type PaginatorPropsType = {
  totalItemsCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (p: number) => void
}

export let Paginator: React.FC<PaginatorPropsType> = ({totalItemsCount, currentPage, pageSize, onPageChanged}) => {
  let portionSize = 10
  let pagesCount = totalItemsCount / pageSize

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount/portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  return <div className={s.paginator}>
    <div>
      {portionNumber > 1 &&
        <button className={s.nav} onClick={() => setPortionNumber(portionNumber - 1)}> {'<'} </button>}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
        return <span className={cn({[s.selectedPage]: currentPage === p}, s.pageNumber)}
                     key={p}
                     onClick={() => {
                       onPageChanged(p)
                     }}
        >{p}</span>
      })}
      {portionCount > portionNumber &&
      <button className={s.nav} onClick={() => setPortionNumber(portionNumber + 1)}>{">"}</button>}
    </div>
  </div>
}