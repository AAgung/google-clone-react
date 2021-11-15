import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import { useNavigate } from 'react-router-dom';
import './Search.css';

function Search({ hideButtons = false }) {
  const [{ term }, dispatch] = useStateValue();
  const [searchTerm, setSearchTerm] = useState(term ?? '');
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: searchTerm,
    });

    navigate('/search');
  }

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}  />
        <MicIcon />
      </div>

      <div className={`search__buttons ${hideButtons ? 'search__buttonsHidden' : ''}`}>
        <Button variant="outlined" type="submit" onClick={search}>
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </form>
  )
}

export default Search
