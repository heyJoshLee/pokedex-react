import './App.css';
import SearchBar from './components/SearchBar';
import PokemonContainer from './components/PokemonContainer'; 
function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchBar />
        <PokemonContainer />
      </div>
    </div>
  );
}

export default App;
