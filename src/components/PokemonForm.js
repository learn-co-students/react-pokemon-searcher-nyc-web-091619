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

  handleSubmit = event =>{
    event.preventDefault()
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        stats:[
          {
            "value": this.state.hp,
            "name": "hp"
          }
        ],
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      })
    })
    .then(resp => resp.json())
    .then(poke => this.props.addNew(poke))
    .catch(err => alert('error', err))
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Add Your Pokemon</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input  label="Name" placeholder="Name" name="name" value={this.state.name} onChange={event => this.setState({name: event.target.value})} />
            <Form.Input  label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={event => this.setState({hp: event.target.value})} />
            <Form.Input  label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={event => this.setState({frontUrl: event.target.value})} />
            <Form.Input  label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={event => this.setState({backUrl: event.target.value})} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm