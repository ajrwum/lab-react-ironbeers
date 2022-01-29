import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Header from '../components/Header';

const OneBeer = () => {
  // getting the beerId through params
  const params = useParams();
  // creating states
  const [beer, setBeer] = useState({});
  const [fetching, setFetching] = useState(true);

  // fetching the expected beer
  useEffect(() => {
    // setting th url depending on the presence of params in request url
    let requestUrl = '';
    if (params.beerId) {
      // request for a specific beer
      // console.log('params.beerId :>> ', params.beerId);
      requestUrl = `https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`;
    }
    else {
      // request for a random beer
      // console.log('random beer request');
      requestUrl = `https://ih-beers-api2.herokuapp.com/beers/random`;
    }
    // getting the beer
    axios.get(requestUrl)
    .then(response => {
      // console.log('response.data :>> ', response.data);
      setBeer(response.data);
      setFetching(false);
    })
    .catch(e => console.error(e))
  }, [params]);


  return (
    <>
      <Header />

      {fetching && <h3>Loading beer...</h3> }
      <div id='one-beer' >
        <div className='image' >
          <img src={beer.image_url} alt={beer.name} />
        </div>
        <div className="base-info">
          <div className="name-att">
            <h1>{beer.name}</h1>
            <p className="attenuation">{beer.attenuation_level}</p>
          </div>
          <div className="tag-date">
            <p className='tagline' >{beer.tagline}</p>
            <p className='first-brewed' ><strong>{beer.first_brewed}</strong></p>
          </div>
          <p className='description' >{beer.description}</p>
          <p className='contributed' >{beer.contributed_by}</p>
        </div>
      </div>
    </>
  )
};

export default OneBeer;
