import React from 'react';

import { Link } from 'react-router-dom';

import allBeers from './../assets/beers.png';
import randomBeer from './../assets/random-beer.png';
import newBeer from './../assets/new-beer.png';

const Home = () => {
  return <>
    <div className="container">
      <div className="link">
        <Link to='/beers' >
          <img src={allBeers} alt='all beers' />
          <div className="text">
            <h2>All Beers</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod consectetur corrupti omnis provident?</p>
          </div>
        </Link>
      </div>
      <div className="link">
        <Link to='random-beer' >
          <img src={randomBeer} alt='random beer' />
          <div className="text">
            <h2>Random Beer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta laboriosam quas obcaecati culpa voluptas.</p>
          </div>
        </Link>
      </div>
      <div className="link">
        <Link to='new-beer' >
          <img src={newBeer} alt='new beer' />
          <div className="text">
            <h2>New Beer</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque totam placeat est excepturi reprehenderit.</p>
          </div>
        </Link>
      </div>
    </div>
  </>;
};

export default Home;
