import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import styled, {ThemeProvider} from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Login from './Login.jsx';
import Profile from './Profile/Profile.jsx';
import Form from './Profile/Form.jsx';
import FormArtist from './Profile/FormArtist.jsx';
import FormListener from './Profile/FormListener.jsx';
import DiscoverArtists from './Home/DiscoverArtists.jsx';
import Artist from './Home/Artist.jsx';
import BandsHome from './Bands/BandsHome.jsx';
import MapEvents from './Events/MapEvents.jsx';
import Header from './Header.jsx';
import GlobalContext from './Contexts/GlobalContext.jsx';
import MessagesPage from './Messages/MessagesPage.jsx';
import DirectMessages from './DirectMessage/DirectMessages.jsx';
import MusicUpload from './UploadMusic/MusicUpload.jsx';
import EventLandingPage from './Events/EventLandingPage.jsx';
import CreateEvent from './Events/CreateEvent.jsx';
import Events from './Events/Events.jsx';
import KreweEventLandingPage from './Events/KrewesicArtists/KreweEventLandingPage.jsx';
import VisitProfile from './Profile/VisitProfile.jsx';
import GlobalStyle from '../components/styles/globalStyles.jsx';
import ColorBlind from '../components/styles/colorBlind.jsx';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import VirtualEvent from './LiveStream/VirtualEvent.jsx';
import AudioRecording from './Recording/AudioRecording.jsx';
import VideoChats from './LiveStream/VideoChats.jsx';
import ConferenceCall from './LiveStream/ConferenceCall.jsx';
import MyEvents from './Events/MyEvents.jsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import io from 'socket.io-client';
const socket = io.connect('/');

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
    color: 'purple',
  },
  paper: {
    background: '#3F0071'
  }
}));



const AppStyles = styled.div`
.nav {
  background-color: #3F0071;
}
@media screen and (max-width: 600px) {
  .naval {
    background-color: green;
  }

  .desktopRender {
    display: none
  }
}

@media only screen and (min-width: 601px) {
  .mobileRender {
    display: none
  }
}

@media screen and (min-width: 601px) {


  .appBox {
    display: none
  }
}

`;

const App = (props) => {
  const styles = useStyles();
  const [open, setOpen ] = useState(false);
  const [id, setId] = useState(0);
  const [artistBio, setMyBio] = useState('');
  const [influences, setInfluence] = useState('');
  const [artistName, setMyName] = useState('');
  const [myGenre, setMyGenre] = useState('');
  const [pic, setPic] = useState('');
  const [favArtist, setArtist] = useState('');
  const [favGenre, setGenre] = useState('');
  const [bio, setBio] = useState('');
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [type, setType] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [colorBlind, setColorBlind] = useState(false);


  //const [socket] = useState(io.connect('/'));


  const value = { id, setId, name, setName, picture, setPicture, type, setType, loggedIn, setLoggedIn, city, setCity, bio, setBio, favArtist, setArtist, favGenre, setGenre, artistBio, setMyBio, artistName, setMyName, pic, setPic, myGenre, setMyGenre, influences, setInfluence, socket };

  const theme = {
    colorBackground: '#000000', //background
    colorDark: '#150050', //top banner/ optional use
    colorMed: '#3F0071', //navbar
    colorLight: '#610094', //buttons
    textColorDark: '#a2a1a7', //text descriptions/body
    textColorLight: '#c3c2c5' //text headers
  };
  //using the theme makes it easier to override the defaults for mui that we we dont want.  We will need to set up a colorblind theme and switch it with the toggle so they dont override the Color accessibility toggling.  so pass it props theme={coloracccesibility ? theme1 : theme2} or something similar



  return (
    <AppStyles>
      { colorBlind === false ? (<GlobalStyle />) :
        (<ColorBlind />)
      }
      <GlobalContext.Provider value={value}>
        <Router>
          <ThemeProvider theme={theme}>
            <Header
              style={{ backgroundColor: '#3F0071'}}
            />
            <Box
              className='appBox'
              style={{ backgroundColor: '#3F0071'}}
            >
              <AppBar
                position="sticky"
                className='nav'
                style={{ backgroundColor: '#3F0071'}}
              >


                <Toolbar
                  disableGutters
                  style={{ backgroundColor: '#3F0071'}}
                >
                  <Box
                    className='mobileRender'
                  >
                    <Hidden
                      xsDown
                    >
                      <Link className={styles.link} to='/DiscoverArtists'> Discover Artists </Link>

                      <Link className={styles.link} to='/mapevents'>Find Events</Link>
                      <Link className={styles.link} to='/messages'>Messages</Link>
                      <Link className={styles.link} to='/profile'>Profile</Link>
                      <Link className={styles.link} to='/createevent'>Create Event</Link>

                      <Link className={styles.link} to='/events'>Event Hub</Link>
                      <Link className={styles.link}to='/myEvents'>My Events</Link>
                      <Link className={styles.link} to='/videoChats'>Video Chats</Link>

                      <Link className={styles.link} to='/audiorecording'>Recording Studio</Link>

                      <Link className={styles.link} to='/uploadMusic'>Upload Music</Link>

                      <p className='clickableNav'>Color Blind Accessibility: <props.switch checked={colorBlind} onChange={() => setColorBlind(!colorBlind)} /> </p>
                    </Hidden>
                  </Box>

                  <Hidden>
                    <IconButton
                      onClick={() => setOpen(true)}
                    >
                      <MenuIcon/>
                    </IconButton>
                  </Hidden>

                </Toolbar>
                <Box
                  style={{ backgroundColor: '#3F0071'}}
                >
                  <SwipeableDrawer
                    classes={{ paper: styles.paper}}
                    anchor='left' open={open}>
                    <div
                      style={{ backgroundColor: '#3F0071'}}
                      align="right"
                    ><IconButton
                        onClick={() => setOpen(false)}
                      ><ChevronLeftIcon /></IconButton></div>
                    <Divider
                      style={{ backgroundColor: '#3F0071'}}
                    />

                    <Link onClick={() => setOpen(false)} className='clickableNav' to='/DiscoverArtists'> Discover Artists </Link>

                    <Link onClick={() => setOpen(false)} className='clickableNav' to='/mapevents'>Find Events</Link>
                    <Link onClick={() => setOpen(false)} className='clickableNav' to='/messages'>Messages</Link>
                    <Link onClick={() => setOpen(false)} className='clickableNav' to='/profile'>Profile</Link>
                    <Link onClick={() => setOpen(false)} className='clickableNav' to='/createevent'>Create Event</Link>

                    <Link onClick={() => setOpen(false)} className='clickableNav' to='/events'>Event Hub</Link>
                    <Link onClick={() => setOpen(false)} className='clickableNav' to='/myEvents'>My Events</Link>
                    <Link onClick={() => setOpen(false)} className='clickableNav' to='/videoChats'>Video Chats</Link>

                    <Link onClick={() => setOpen(false)} className='clickableNav' to='/audiorecording'>Recording Studio</Link>

                    <Link onClick={() => setOpen(false)} className='clickableNav' to='/uploadMusic'>Upload Music</Link>

                    <p style={{color: '#c3c2c5'}} className='clickableNav'>Color Scheme: <props.switch checked={colorBlind} onChange={() => setColorBlind(!colorBlind)} /> </p>

                  </SwipeableDrawer>
                </Box>
              </AppBar>
            </Box>
            <Box
              className='desktopRender'
            >
              <nav
                style={{ display: 'flex'}}
                className='naval'
              >
                <Link className='clickableNav' to='/DiscoverArtists'> Discover Artists </Link>

                <Link className='clickableNav' to='/mapevents'>Find Events</Link>
                <Link className='clickableNav' to='/messages'>Messages</Link>
                <Link className='clickableNav' to='/profile'>Profile</Link>
                <Link className='clickableNav' to='/createevent'>Create Event</Link>

                <Link className='clickableNav' to='/events'>Event Hub</Link>
                <Link className='clickableNav' to='/myEvents'>My Events</Link>
                <Link className='clickableNav' to='/videoChats'>Video Chats</Link>

                <Link className='clickableNav' to='/audiorecording'>Recording Studio</Link>

                <Link className='clickableNav' to='/uploadMusic'>Upload Music</Link>

                <p className='clickableNav'>Color Scheme: <props.switch checked={colorBlind} onChange={() => setColorBlind(!colorBlind)} /> </p>
              </nav>
            </Box>

            <Switch>
              <Route exact path="/" component={Login}>
              </Route>
              <Route path='/DiscoverArtists' >
                <DiscoverArtists />
              </Route>
              <Route path='/profile' >
                <Profile />
              </Route>
              <Route path='/form' >
                <Form />
              </Route>
              <Route path='/listenerform' >
                <FormListener />
              </Route>
              <Route path='/artistform' >
                <FormArtist />
              </Route>
              <Route path='/bands' >
                <BandsHome />
              </Route>
              <Route path='/events' >
                <Events />
              </Route>
              <Route path='/myEvents' >
                <MyEvents />
              </Route>
              <Route path='/kreweEventLandingPage/:eventId' >
                <KreweEventLandingPage />
              </Route>
              <Route path='/mapevents' >
                <MapEvents />
              </Route>
              <Route path='/eventLandingPage/:eventId/:venue/:city/:performers/:lat/:lng/:type/:datetime' >
                <EventLandingPage />
              </Route>
              <Route path='/createevent' >
                <CreateEvent />
              </Route>
              <Route path='/virtualevent/:code/:artistId/:artistName' >
                <VirtualEvent />
              </Route>
              <Route path='/conferenceCall/:code/:creator/:other' >
                <ConferenceCall />
              </Route>
              <Route path='/videoChats' >
                <VideoChats />
              </Route>
              <Route path='/audiorecording' >
                <AudioRecording />
              </Route>
              <Route path='/visitProfile/:id' >
                <VisitProfile />
              </Route>
              <Route exact path='/uploadMusic' component={MusicUpload} />
              <Route path='/messages' component={MessagesPage}>
              </Route>
              <Route exact path='/DirectMessage' component={DirectMessages} />

              <Route>
                <div>404 page not available</div>
              </Route>
            </Switch>
          </ThemeProvider>
        </Router>
      </GlobalContext.Provider>

    </AppStyles>
  );

};

export default App;

