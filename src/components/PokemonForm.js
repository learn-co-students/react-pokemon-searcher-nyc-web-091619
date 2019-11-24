import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  formHandler = (e) => {
    this.setState({[e.target.name]: e.target.value })  
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {name, hp, frontUrl, backUrl} = this.state
    const api = 'http://localhost:3000/pokemon'

      fetch(api, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify({
          name, 
          stats: [{
            name: 'hp',
            value: hp
          }],
          sprites: {
          front: frontUrl, 
          back: backUrl
          } 
        }) 
    }).then(res => res.json()).then(pokemon => this.props.addPokemon(pokemon))
    this.setState(
      { 
        name: '',
        hp: '',
        frontUrl: '',
        backUrl: ''
      });
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.formHandler} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.formHandler} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.formHandler}  />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.formHandler} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
