import React, { useState } from 'react';
import { fetchPokemon } from '../actions';
import { connect } from 'react-redux';

const SearchBar = ({ fetchPokemon}) => {

  const [searchTerm, setSearchTerm] = useState("");


  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchPokemon(searchTerm);
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
      name="search-term"
      onChange={handleChange} 
      value={searchTerm} 
      placeholder="Search by Pokémon name or id..." 
      />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    pokemon: state.pokemon
  }
}

export default connect(mapStateToProps, {
  fetchPokemon
})(SearchBar);