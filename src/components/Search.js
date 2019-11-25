import React from "react";

// const Search = props => {
//   return (
//     <div className="ui search">
//       <div className="ui icon input">
//         <input className="prompt" onChange={props.onChange} />
//         <i className="search icon" />
//       </div>
//     </div>
//   )
// }

// export default Search

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  handleInput = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = event => {
    if (event.key === "Enter") {
      this.props.handleSearch(this.state.input);
    }
  };

  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input
            className="prompt"
            onChange={this.handleInput}
            onKeyPress={this.handleSubmit}
            value={this.state.input}
          />
          <i className="search icon" />
        </div>
      </div>
    );
  }
}

export default Search;
