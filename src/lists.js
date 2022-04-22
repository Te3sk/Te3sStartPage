import React from 'react'
import { conf } from './utilies/config'
import { styles } from './utilies/themeConfig'

export default function SngList (lst) {
  const th = conf.darkMode ? styles[conf.theme].dark : styles[conf.theme].normal;
  const lstColor = conf.darkMode ? 'white' : 'black';
  
  return (
    <div className = 'flex flex-row justify-center'>
      <div className = 'flex flex-row items-start '>
        {Object.keys(conf.lists).map(k => <div className = 'flex flex-col items-start justify-start min-w-max w-fit'>
          <div className = {'flex flex-col mx-6 items-center rounded-lg w-44 border-t-2 border-t-' + th.mainColor}>
            <p className = {'my-1 font-bold text-2xl text-' + th.mainColor}>{k}</p>
            {Object.keys(conf.lists[k]).map(s => 
              <a 
                className = {'hover:text-' + th.mainColor + ' my-1 text-lg text-' + lstColor}
                href = {conf.lists[k][s]} 
                target = {conf.newTab ? '_blank' : null} 
                rel = "noreferrer">{s}</a>)}
          </div>
        </div>)}
      </div>
    </div>
  )
}


