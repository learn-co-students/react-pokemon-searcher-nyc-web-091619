import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    sprites: this.props.pokemon.sprites.front
  }


  getHp = () => {
    return this.props.pokemon.stats.find(stat => stat.name === 'hp').value
  }

  imageToggler = () => {
    this.state.sprites === this.props.pokemon.sprites.front ? this.setState({ sprites: this.props.pokemon.sprites.back  }) : this.setState({ sprites: this.props.pokemon.sprites.front  })  }

  render() {
    const {name} = this.props.pokemon
    
    return (
      <Card>
        <div>
          <div onClick={this.imageToggler} className="image">
            <img src={this.state.sprites} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
                {this.getHp()} hp 
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
