import React from 'react'
import { Form } from 'semantic-ui-react'
const URL = "http://localhost:3000/pokemon"

class PokemonForm extends React.Component {
  state = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

  createPokeJSON = ()=>{
    return {
      name: this.state.name,
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      },
      stats: [
        {
          value: this.state.hp,
          name: "hp"
        }
      ]
    }
  }

  updateState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    console.log("submitting the form with state as :", this.state)
    fetch(URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(this.createPokeJSON())
    })
    .then(resp => resp.json())
    .then(data => this.props.addPoke(data))
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid onChange={this.updateState} label="Name" placeholder="Name" name="name" />
            <Form.Input fluid onChange={this.updateState} label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid onChange={this.updateState} label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid onChange={this.updateState} label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
