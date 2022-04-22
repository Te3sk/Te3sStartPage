import React from 'react'
import { useDate } from './dateTime.js'
import { conf } from '../utilies/config.js'
import { styles } from '../utilies/themeConfig.js'

export default function Time() {
  const th = conf.darkMode ? styles[conf.theme].dark : styles[conf.theme].normal;
  const {date, time, wish} = useDate()

  return (
    <div className = "flex flex-col justify-center items-center">
      <div className = {'text-6xl font-black font-FtG m-auto text-' + th.mainColor}>
        <div className = 'flex flex-row'>
          <p>{date}</p>
        </div>
        <div>
          <p className='flex flex-row justify-center'>{time}</p>
        </div>
      </div>
      {conf.dateTime.wishes.set ?
        <div className = {'my-3 text-3xl font-semibold font-FtG text-' + th.mainColor}>
          {wish}
        </div>        
        : <></>
      }
    </div>
  )
}
