import React from 'react'
import s from './MainTitles.module.css'
interface TMainTitle {
  title: string
}

export default function MainTitles({title}:TMainTitle) {
  return (
    <div className={s.main}>
      <h1 className={s.title}>{title}</h1>
    </div>
  )
}
