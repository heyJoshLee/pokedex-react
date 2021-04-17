import React from 'react';
import { connect } from 'react-redux';

const PokemonContainer = ({ pokemon }) => {

  const capitalize = (name) => {
   return name.charAt(0).toUpperCase() + name.slice(1)
  };

  const renderTypes = () => {
    let string = "";
    pokemon.types.forEach(type => {
      string += `${capitalize(type.type.name)} `
    });
    return string.split(' ').join(', ')
  };
  
  const renderStats = () => {
    return pokemon.stats.map(stat => {
      return <li>{`${capitalize(stat.stat.name)}: ${stat.base_stat}`}</li>
    });
  };

  const renderAbilities = () => {
    return pokemon.abilities.map(ability => {
      return <li>{`${capitalize(ability.ability.name)}`}</li>
    })
  }

  if (!pokemon) return <div></div>;
  return (
    <div>
      <h2 className="center-align">{capitalize(pokemon.name)} </h2>
      <div className="row">
        <div className="col s6">
          <p>Height: {pokemon.height}' Weight: {pokemon.weight} lbs </p>
          <p>Types: {renderTypes()}</p>
        </div>
        <div className="col s6">
          <img id="pokemon-image" src={pokemon.sprites.front_default} /> <br/>
        </div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col s6">
          <h3>Stats</h3>
          <ul>
             {renderStats()}
          </ul> 
        </div>
        <div className="col s6">
          <h3>Ablities</h3>
            <ul>
              {renderAbilities()}
            </ul> 
        </div>
      </div>


    </div>
  )
}

const mapStateToProps = state => {
  return {
    pokemon: state.pokemon
  }
}

export default connect(mapStateToProps)(PokemonContainer);