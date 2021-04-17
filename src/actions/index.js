import axios from 'axios';
export const fetchPokemon = (searchTerm) => async dispatch => {
  const response = await axios(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
  dispatch({
    type: "FETCH_POKEMON",
    payload: response.data
  })
}