import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Header from '../components/Header';
import Search from '../components/Search';


const AllBeers = () => {
  // creating states
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [fetching, setFetching] = useState(true);

  // loading the beers for the first display of AllBeers page
  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => {
      // console.log('response.data :>> ', response.data);
      setBeers(response.data);
      setFetching(false);
    })
    .catch(e => console.error(e))
  }, []);

  // loading the beers matching the searchQuery whenever the searchQuery is updated
  useEffect(() => {
    // the user is using the search feature
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`)
    .then(({ data }) => {
      console.log('searchQuery :>> ', searchQuery);
      setBeers(data);
      setFetching(false);
    })
    .catch(e => console.error(e));
  }, [searchQuery]);


  return <>
    <Header />
    {fetching && <h3>Loading beers...</h3> }

    <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

    <div id="all-beers">
      {beers.length &&
      beers.map(beer => {
        return (
          <div className="card" key={beer._id} >
            <div className="image">
              <img src={beer.image_url} alt={beer.name} />
            </div>
            <div className="base-info">
              <Link to={`/beers/${beer._id}`} >
                <h2>{beer.name}</h2>
              </Link>
              <p className='tagline' >{beer.tagline}</p>
              <p><strong>Created by: </strong>{beer.contributed_by}</p>
            </div>
          </div>
        )
      })
      }
    </div>
  </>;
};

export default AllBeers;
