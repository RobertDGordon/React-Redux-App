import React, {useState} from 'react';
import styled from 'styled-components'
import moment from 'moment'

const CardDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
    width: 500px;
    margin: 10px;
    padding: 20px;
    .image{
        display: flex;
        justify-content: center;
        align-items: center;
        width:450px;
        min-height:300px;
        /* overflow: hidden; */
        .imgcont{
            min-width:450px;
            min-height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        img{
            max-width: 450px;
            max-height: 300px
        }
        .imgbtn{
            font-size: 3rem;
            &:hover{
                color: lightgray;
            }
        }
    }
    .buttondiv{
        display: flex;
        width: 100%;
        justify-content: center;
        button{
            margin-left: 5px;
        }
    }
    div{
        margin-top: 5px;
    }
    span{
        font-weight: bold;
    }
`

const Card = (props) => {

    const [currentImg, setCurrentImg] = useState(0);

    const [currentFlight, setCurrentFlight] = useState(props.flight);

    const timestamp = moment.unix(props.data[props.flight].launch_date_unix);

    const leftChange = e =>{
        e.preventDefault();
        console.log('left', currentImg)
        if (currentImg === 0){
            let newImg = (props.data[props.flight].links.flickr_images.length-1)
            console.log(newImg)
            setCurrentImg(newImg)
            console.log('equals zero',currentImg)
        } else {
            let newImg = (currentImg-1)
            console.log(newImg)
            setCurrentImg(newImg)
            console.log('else',currentImg)
        }
        props.changeImage(currentImg)
    }

    const rightChange = e =>{
        e.preventDefault();
        console.log('right', currentImg)
        if (currentImg === props.data[props.flight].links.flickr_images.length-1){
            setCurrentImg(0)
            console.log('max array',currentImg)
        } else {
            setCurrentImg(currentImg+1)
            console.log('else',currentImg)
        }
        props.changeImage(currentImg)
    }

    const prevFlight = e =>{
        e.preventDefault();
        console.log('prev', currentFlight, props.data.length)
        if (currentFlight === 0){
            setCurrentFlight((props.data.length-1))
            console.log('equals zero',currentFlight)
        } else {
            setCurrentFlight(currentFlight-1)
            console.log('else',currentFlight)
        }
        props.updateSearch(currentFlight)
    }

    const nextFlight = e =>{
        e.preventDefault();
        console.log('next', currentFlight)
        if (currentFlight === props.data.length-1){
            setCurrentFlight(0)
            console.log('max array',currentFlight)
        } else {
            setCurrentFlight(currentFlight+1)
            console.log('else',currentFlight)
        }
        props.updateSearch(currentFlight)
    }


    return(
        <CardDiv>
        <div className='image'>{props.data[props.flight].links.flickr_images[0] !== undefined ? <><div className='imgbtn' onClick={e => leftChange(e)}>{`<`}</div><div className='imgcont'><img src={props.data[props.flight].links.flickr_images[props.image]} alt='Flickr'/></div><div className='imgbtn' onClick={e => rightChange(e)}>></div></> : <>Image Not Available</> }</div>
        <div className='info'>
        <div className='buttondiv'><button onClick={e => {prevFlight(e)}}>Prev Flight</button><button onClick={e => {nextFlight(e)}}>Next Flight</button></div>
        <div><span>Flight number:</span> {props.data[props.flight].flight_number}</div>    
        <div><span>Mission name:</span> {props.data[props.flight].mission_name}</div>    
        <div><span>Launch date:</span> {timestamp.format('MMMM Do YYYY, h:mm:ss a')}</div>    
        <div><span>Details:</span> {props.data[props.flight].details}</div>    
        </div>
        </CardDiv>
    )
}

export default Card