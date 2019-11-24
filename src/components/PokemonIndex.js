import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    filterValue: ''
  }

  componentDidMount() {
    
      const api = 'http://localhost:3000/pokemon'
      return fetch(api).then(res => res.json()).then(pokemons => this.setState({ pokemons: pokemons  }))
  }

  filteredPokemons = () => {
    if (this.state.filterValue.length === 0) {
      return this.state.pokemons
    } else if (this.state.filterValue.length >= 1) {
      return this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.filterValue))
    }
  }

  onChangeHandler = (e) => {
    this.setState({ filterValue: e.target.value });
  }

  addPokemon = (pokemon) => {
    this.setState({ pokemons: [...this.state.pokemons, pokemon]  });
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={(e) => this.onChangeHandler(e)} />
        <br />
        <PokemonCollection pokemons={this.filteredPokemons()}/>
      </Container>
    )
  }
}

export default PokemonPage
