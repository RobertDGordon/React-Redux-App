import React, {useState} from 'react';
import styled from 'styled-components';

const SearchDiv = styled.div `
    display: flex;
    width: 250px;
    margin: 10px;
    button {
        margin-left: 10px;
    }
`

const SearchBar = (props) => {

  const [srch, setSrch] = useState(" ");

  const handleChange = event => {
    setSrch(event.target.value-1);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log (srch);
    props.updateSearch(Number(srch))
  }

    return (
        <SearchDiv>
        <form onSubmit={event => handleSubmit(event)}>
            <input type="text" name="flight" placeholder='Enter flight number...' onChange={event => handleChange(event)} />
          <button>Search!</button>
        </form>
        </SearchDiv>
    )
}

export default SearchBar