import React from 'react'
import cls from './index.module.scss'

const list = [1, 2, 3, 4, 5, '1', '2', '3', '4', '5']

const Card = () => {
  for (const listElement of list) {
    console.log(listElement)
  }

  const fetchSomething = () => {
    return new Promise(resolve => {
      resolve('ok')
    })
  }

  return (
    <div className={cls.card}>
      <div className={cls.card_title}>卡片</div>
    </div>
  )
}

export default Card
