import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Header from '../components/Header';

const NewBeer = () => {
  // creating states
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirstBrewed] = useState('');
  const [brewers_tips, setBrewersTips] = useState('');
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContributedBy] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    // avoiding page reloading after the form's post
    evt.preventDefault();

    // creating payload data
    const data = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    };

    // posting to the server the data entered by the user
    axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, data)
    .then(response => {
      // console.log('response :>> ', response);
      // redirect to all beers' list
      navigate('/beers');
    })
    .catch(e => {
      console.error(e);
    });
  };

  return <div className='new-beer'>
    <Header />
    {/* <h1>New Beer</h1> */}
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="tagline">Tagline</label>
        <input id="tagline" type="text" name="tagline"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)} />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input id="description" type="text" name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label htmlFor="first_brewed">First Brewed</label>
        <input id="first_brewed" type="text" name="first_brewed"
                value={first_brewed}
                onChange={(e) => setFirstBrewed(e.target.value)} />
      </div>
      <div>
        <label htmlFor="brewers_tips">Brewers Tips</label>
        <input id="brewers_tips" type="text" name="brewers_tips"
                value={brewers_tips}
                onChange={(e) => setBrewersTips(e.target.value)} />
      </div>
      <div>
        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input id="attenuation_level" type="text" name="attenuation_level"
                value={attenuation_level}
                onChange={(e) => setAttenuationLevel(+e.target.value)} />
      </div>
      <div>
        <label htmlFor="contributed_by">Contributed By</label>
        <input id="contributed_by" type="text" name="contributed_by"
                value={contributed_by}
                onChange={(e) => setContributedBy(e.target.value)} />
      </div>

      <button>ADD NEW</button>
    </form>

  </div>;
};

export default NewBeer;
