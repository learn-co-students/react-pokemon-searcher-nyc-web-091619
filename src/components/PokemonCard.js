import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  turnAround = e => {
    if(e.target.src.includes("back")){
      e.target.src = this.props.pokemon.sprites.front
    }else{
      e.target.src = this.props.pokemon.sprites.back
    }
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.turnAround} src={this.props.pokemon.sprites.front} alt="oh no!" />
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
