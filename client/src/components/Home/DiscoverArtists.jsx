/* eslint-disable brace-style */
import React, { reactDOM, useContext, useState, useEffect} from 'react';
import {Router, Route, Link, RouteHandler} from 'react-router';
import { Redirect } from 'react-router';
import { Box } from '@mui/system';
import GlobalContext from '../Contexts/GlobalContext.jsx';
import axios from 'axios';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import styled from 'styled-components';
import keys from '../Events/keys.js';
import Artist from './Artist.jsx';
import Typography from '@material-ui/core/Typography';


// const StyledArtistOfDay = styled.div`
//   margin-top: 30px;
// `;



const discoverArtists = () => {
  const [ userBase, setUserBase ] = useState([]);

  //IMPORTANT
  const {name, setName, picture, setPicture, type, setType, loggedIn, setLoggedIn, id, setId, socket} = useContext(GlobalContext);
  //IMPORTANT








  const renderUsers = async () => {
    await axios.get('/form/allUsers')
      .then(({data}) => {



        setUserBase(data);
      })
      .catch((err) => console.warn(err));
  };

  useEffect(async() => {
    const {data} = await axios.get('/form/user');
    setName(data.name);
    setPicture(data.picture);
    setType(data.type);
    setLoggedIn(true);
    setId(data.id);
    renderUsers();
    //since the logged in redirect goes here, send this out so socket can keep track of logged in Us
    socket.emit('loggedIn', data.id);
  }, []);




  return (
    <div style={{backgroundColor: '#150050', height: '100vh'}}>
      <Typography
        style={{ color: '#c3c2c5' }}
        align='center'
        variant='h4'>Artists</Typography>
      <hr
        style={{border: '1px solid #610094'}}
      />
      { userBase.map((user, i) => {
        if (user.type === 'artist') {
          return <Artist
            key={i}
            user={user}
          />;
        }
      }) }

    </div>

  );
};

export default discoverArtists;