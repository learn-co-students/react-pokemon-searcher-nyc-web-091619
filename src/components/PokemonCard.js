import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  turnPoke = event => {
    if (event.target.src.includes("back")) {
        event.target.src = this.props.pokemon.sprites.front
    } else {
        event.target.src = this.props.pokemon.sprites.back
    }
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.turnPoke} src={this.props.pokemon.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stat => stat.name === "hp").value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
