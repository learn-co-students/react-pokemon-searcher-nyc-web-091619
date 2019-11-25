import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

let allPokemons = []

class PokemonPage extends React.Component {
  state = {
    sorted_pokemons: []
  }
  
  componentDidMount(){
    this.fetchPokemons()
  }

  fetchPokemons = () => {
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(poke => {
      this.setState({sorted_pokemons: poke})
      allPokemons = poke
    })
  }

  onChange = (searchTerm="") => {
      this.setState({sorted_pokemons: allPokemons.filter(poke =>
        poke.name.includes(searchTerm)
      )
      })
  }

  addNew = new_poke => {
    allPokemons.push(new_poke)
    this.onChange()
    console.log("added")
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1> 
        <h1></h1>
        <PokemonForm addNew={this.addNew} /> 
        <h1></h1>  
        <Search onChange={this.onChange} />
        <h1></h1>
        <PokemonCollection pokemons={this.state.sorted_pokemons} />
      </Container>
    )
  }
}

export default PokemonPage
