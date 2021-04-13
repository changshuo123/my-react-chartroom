import React from 'react'
import style from './style.module.scss'
function Loading() {
  return (
    <div className={style.wrap}>
      <div className={style.box}>...loading</div>
    </div>
  )
}
export default Loading