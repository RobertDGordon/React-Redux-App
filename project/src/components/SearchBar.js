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

  const [srch, setSrch] = useState('');
  const [doesNotExist, setDoesNotExist] = useState(false);

  const handleChange = event => {
    setSrch(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log ('searching for',srch);
    setDoesNotExist(false)
    if (srch > props.data.length){
      console.log('does not exist', srch)
      setDoesNotExist(true)
      setSrch('')
      return
    } else if(isNaN(srch)){
      console.log('not a number!')
      setSrch('')
      return
    } else if(srch === ''){
      setSrch('')
      return
    }
    props.updateSearch(Number(srch-1))
    setSrch('')
  }

    return (
        <>
        <SearchDiv>
        <form onSubmit={event => handleSubmit(event)}>
            <input type="text" name="flight" value={srch} placeholder='Enter flight number...' onChange={event => handleChange(event)} />
          <button>Search!</button>
        </form>
        </SearchDiv>
        {doesNotExist && <div onClick={() => setDoesNotExist(false)}>Error, flight does not exist... yet!</div>}
        </>
    )
}

export default SearchBar