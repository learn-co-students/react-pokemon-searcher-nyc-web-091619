import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    expanded: false,
    front: true
  }

  cardSprite = () =>{
    return this.state.front ? this.props.sprites.front : this.props.sprites.back
  }

  flip = () =>{
    this.setState({
      front: !this.state.front
    })
  }

  getHp = () => {
    return this.props.stats.find(state => state.name === "hp").value
  }


  render() {
    return (
      <Card >
        <div>
          <div onClick={this.flip} className="image">
            <img src={this.cardSprite()} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getHp()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard


// {
//   "height": 10,
//   "weight": 130,
//   "id": 2,
//   "name": "ivysaur",
//   "abilities": ["overgrow", "chlorophyll"],
//   "moves": [],
//   "stats": [
//     {
//       "value": 80,
//       "name": "special-defense"
//     },
//     {
//       "value": 80,
//       "name": "special-attack"
//     },
//     {
//       "value": 63,
//       "name": "defense"
//     },
//     {
//       "value": 62,
//       "name": "attack"
//     },
//     {
//       "value": 60,
//       "name": "speed"
//     },
//     {
//       "value": 60,
//       "name": "hp"
//     }
//   ],
//   "types": ["grass", "poison"],
//   "sprites": {
//     "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
//     "back":
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
//   }
// }