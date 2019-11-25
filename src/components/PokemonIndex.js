import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  state = {
    pokemons: []
  };

  componentDidMount() {
    this.fetchPokemon();
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search handleSearch={this.handleSearch} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} />
      </Container>
    );
  }

  fetchPokemon = () => {
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(data => {
        this.setState({ pokemons: data });
      });
  };

  handleSearch = query => {
    const matchingPokemons = this.state.pokemons.filter(
      pokemon => pokemon.name === query
    );
    this.setState({ pokemons: matchingPokemons });
  };

  addPokemon = pokemon => {
    const newPokemon = {
      name: pokemon.name,
      sprites: {
        front: pokemon.frontUrl,
        back: pokemon.backUrl
      },
      stats: [
        {
          value: pokemon.hp,
          name: "hp"
        }
      ]
    };

    let pokemons = this.state.pokemons;
    pokemons.push(newPokemon);

    this.setState({ pokemons: pokemons });
  };
}

export default PokemonPage;
