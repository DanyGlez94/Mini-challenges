import React from 'react';
import { ReturnHome } from '../../components/ReturnHome/ReturnHome';
import { FiSearch } from 'react-icons/fi';
import './GifsApp.scss';

const GifsApp = () => {
  return (
    <>
      <div className='gifsApp'>
        <h1>Gifs Searcher</h1>
        <div className='searchbar'>
          <div>
            <input placeholder="Let's find some gifs!" />
            <span><FiSearch /></span>
          </div>
        </div>
      </div>
      <ReturnHome />
    </>
  )
}

export { GifsApp };