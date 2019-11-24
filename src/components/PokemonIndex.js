import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

let allPoke = new Array

class PokemonPage extends React.Component {
  state = {
    sorted_poke: []
  }
  
  componentDidMount(){
    this.fetchPokemons()
  }

  fetchPokemons = () => {
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(poke => {
      this.setState({sorted_poke: poke})
      allPoke = poke
    })
  }

  onChange = (searchTerm="") => {
      this.setState({sorted_poke: allPoke.filter(poke =>
        poke.name.includes(searchTerm)
      )
      })
  }

  addNew = new_poke => {
    allPoke.push(new_poke)
    this.onChange()
    console.log("added")
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNew={this.addNew} />
        <br />
        <Search onChange={this.onChange} />
        <br />
        <PokemonCollection pokemons={this.state.sorted_poke} />
      </Container>
    )
  }
}

export default PokemonPage
