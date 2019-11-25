import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    currentImage: this.props.pokemon.sprites.front
  };

  handleClick = () => {
    const frontImage = this.props.pokemon.sprites.front;
    const backImage = this.props.pokemon.sprites.back;

    switch (this.state.currentImage) {
      case frontImage:
        this.setState({ currentImage: backImage });
        break;

      case backImage:
        this.setState({ currentImage: frontImage });
        break;

      default:
        break;
    }
  };

  render() {
    const { name, stats } = this.props.pokemon;
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={this.state.currentImage} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats.filter(stat => stat.name === "hp").map(hp => hp.value)}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
