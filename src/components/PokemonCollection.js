import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  makek= () =>{
    return Object.assign(  )
  }

  renderCards = () => {
    return this.props.pokes.map(poke => <PokemonCard {...Object.assign( {key: poke.name}, {...poke})} />)
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
