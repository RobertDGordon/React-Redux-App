import React from 'react';
import styled from 'styled-components'

const CardDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    .image{
        display: flex;
        justify-content: center;
        align-items: center;
        width:300px;
        min-height:300px;
    }
`

const Card = (props) => {

    return(
        <CardDiv>
        <div className='image'>{props.data[84].links.flickr_images[0] !== undefined ? <img src={props.data[84].links.flickr_images[0]} alt='Flickr' height='300px' /> : <>Image Not Available</> }</div>
        <div>Flight number: {props.data[84].flight_number}</div>    
        <div>Mission name: {props.data[84].mission_name}</div>    
        <div>Launch date: {props.data[84].launch_date_unix}</div>    
        <div>Details: {props.data[84].details}</div>    
        </CardDiv>
    )
}

export default Card