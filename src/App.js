import './index.css';
import React from 'react';
import Search from './Search';
import Time from './Timing/Time.js'
import Lists from './lists';
import { conf } from './utilies/config.js';
import { styles } from './utilies/themeConfig.js';

function App() {
  const th = conf.darkMode ? styles[conf.theme].dark : styles[conf.theme].normal;


  return (
    <div class = {'w-full h-screen bg-dark green ' + th.secondColor}>
      <div className = 'flex flex-col items-end mx-5 overflow-y-auto z-10'>
        {/* <Sett/> */}
      </div>
      <div className='z-00 pt-5'>
        <Time/>
        <div class = 'text-center w-full h-fit flex flex-row items-center justify-center'>
          <div>
          <img class = 'object-scale-down h-72' src = {conf.dinamicImage ? th.dinImg : th.stcImg}/>
            <Search/> 
          </div>      
        </div>
        <Lists/>
      </div>
    </div>
  );
}

export default App;
