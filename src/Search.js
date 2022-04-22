import React from 'react'
import { useState} from 'react';
import { conf } from './utilies/config.js'
import { styles } from './utilies/themeConfig.js'

export default function Search() {
  const th = conf.darkMode ? styles[conf.theme].dark : styles[conf.theme].normal;

  const [search, setSearch] = useState("");
  const boomerText = conf.darkMode ? 'white' : 'black';
  var searchUrl;
  switch(conf.searcUsing) {
    case 'google' : searchUrl = "http://google.com/search?q="; break;
    case 'duckduckgo' : searchUrl = "https://duckduckgo.com/?q="; break;
    default : searchUrl = conf.searcUsing;
  }

  const redirect = (e) => {
    e.preventDefault();
    var site = searchUrl + encodeURIComponent(search);
    window.open(site);
    document.getElementById('SB').value = '';
  }

  const [ShowPop, setShowPop] = React.useState(false);

  const prank = (e) => {
    e.preventDefault();
    ShowPop ? setShowPop(false) : setShowPop(true);
  }

  return (
    <div className = 'flex flex-col items-center justify-center'>
      <div className = 'flex flex-row items-end justify-center'>
        <form onSubmit = {redirect}>
          <div className = 'flex flex-raw justify-center'>
            <input
              placeholder = 'Search on Google'
              id = 'SB'
              className = {'text-center text-gray-light border-b-4 border-b-' + th.mainColor + ' bg-' + th.secondColor}
              size = '30'
              value = {search}
              onChange = {(e) => setSearch(e.target.value)}
              autoFocus = {true}
            >
            </input>
            
          </div>
        </form>
        <button 
          className = {'rounded-r-lg w-10 h-8 flex justify-center items-center bg-' + th.mainColor}
          onClick = {prank}
        >
          <svg className="w-6 h-6 scale-x-[-1] text-secondary " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </div>
      {ShowPop ? 
        <>
          <div className = 'flex flex-row w-80 justify-center'>
            <p className = {'rounded-xl bg-' + th.mainColor + '/50 text-' + boomerText}>
              Did you really click on button with the mouse!? Boomer
            </p>
          </div>
        </> : <>
          <div className = 'h-12'/>
        </>
      }
    </div>
  )
}


