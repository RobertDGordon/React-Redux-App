import React from 'react';
import styled from 'styled-components'
import moment from 'moment'

const CardDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    margin: 10px;
    .image{
        display: flex;
        justify-content: center;
        align-items: center;
        width:300px;
        min-height:300px;
    }
`

const Card = (props) => {

    const timestamp = moment.unix(props.data[props.flight].launch_date_unix)

    return(
        <CardDiv>
        <div className='image'>{props.data[props.flight].links.flickr_images[0] !== undefined ? <img src={props.data[props.flight].links.flickr_images[0]} alt='Flickr' height='300px' /> : <>Image Not Available</> }</div>
        <div>Flight number: {props.data[props.flight].flight_number}</div>    
        <div>Mission name: {props.data[props.flight].mission_name}</div>    
        <div>Launch date: {timestamp.format('MMMM Do YYYY, h:mm:ss a')}</div>    
        <div>Details: {props.data[props.flight].details}</div>    
        </CardDiv>
    )
}

export default Card