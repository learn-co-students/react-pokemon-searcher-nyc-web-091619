import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const URL = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {

  state = {
    searchTerm: "",
    showPokes: [],
    allPokes: []
  }

  addPoke = (poke) => {
    this.setState({
      allPokes: [...this.state.allPokes, poke],
      showPokes: [...this.state.allPokes, poke].filter(poke => poke.name.includes(this.state.searchTerm))
    })
  }

  handleSearchType = (term) =>{
    this.setState({
      searchTerm: term,
      showPokes: this.state.allPokes.filter(poke => poke.name.includes(term))
    })
  }

  componentDidMount(){
    fetch(URL).then(resp => resp.json())
    .then(data => {
      this.setState({
        allPokes: data,
        showPokes: data
      })
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPoke={this.addPoke}/>
        <br />
        <Search onChange={this.handleSearchType} />
        <br />
        <PokemonCollection pokes={this.state.showPokes} />
      </Container>
    )
  }
}

export default PokemonPage
