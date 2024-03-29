import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import SearchComponent from '../components/Search';
import './Home.css'

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft"></div>
        <div className="home__headerRight">
          <a href="https://gmail.com">Gmail</a>
          <Link to="/">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Logo" />
        <div className="home__inputContainer">
          <SearchComponent />
        </div>
      </div>
    </div>
  )
}

export default Home
