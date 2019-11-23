import React from 'react'

const Search = props => {

  const handleChange = (e) =>{
    props.onChange(e.target.value)
  }


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
