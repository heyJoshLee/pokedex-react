import { combineReducers } from 'redux';

const pokemonReducer = (pokemon = null, action) => {
  switch (action.type) {
    case "FETCH_POKEMON":
      return action.payload;
    default:
      return pokemon; 
  }
}

export default combineReducers( {
  pokemon: pokemonReducer
});