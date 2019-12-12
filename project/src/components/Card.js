import React from 'react';
import styled from 'styled-components'
import moment from 'moment'

const CardDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
    width: 600px;
    margin: 10px;
    padding: 20px;
    @media screen and (max-width: 400px) {
        width: 320px;
    }
    .image{
        display: flex;
        justify-content: center;
        align-items: center;
        width:590px;
        min-height:400px;
        /* overflow: hidden; */
        .imgcont{
            width: 590px;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }
        img{
            max-width: 585px;
        }
        .imgbtn{
            font-size: 3rem;
            &:hover{
                color: lightgray;
                cursor: pointer;
            }
        }
    }
    .info{
        width: 100%;
    }
    .buttondiv{
        display: flex;
        width: 100%;
        justify-content: center;
        button{
            margin: 5px;
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

    // const [currentImg, setCurrentImg] = useState(props.image);

    // const [currentFlight, setCurrentFlight] = useState(props.flight);
    let currentImg = (props.image)
    let currentFlight = (props.flight)

    const timestamp = moment.unix(props.data[props.flight].launch_date_unix);

    const leftChange = e =>{
        e.preventDefault();
        // console.log('left', currentImg)
        if (currentImg === 0){
            currentImg = (props.data[props.flight].links.flickr_images.length-1)
            console.log('at zero, array length:',currentImg)
        
        } else {
            currentImg = (currentImg-1)
            // console.log('else',currentImg)
        }
        props.changeImage(currentImg)
    }

    const rightChange = e =>{
        e.preventDefault();
        // console.log('right', currentImg)
        if (currentImg === props.data[props.flight].links.flickr_images.length-1){
            currentImg = 0
            console.log('max array',currentImg)
        } else {
            currentImg = (currentImg+1)
            // console.log('else',currentImg)
        }
        props.changeImage(currentImg)
    }

    const prevFlight = e =>{
        e.preventDefault();
        // console.log('prev', currentFlight, props.data.length)
        if (currentFlight === 0){
            currentFlight = (props.data.length-1)
            console.log('at zero, array length:',currentFlight)
        } else {
            currentFlight = (currentFlight-1)
            // console.log('else',currentFlight)
        }
        props.updateSearch(currentFlight)
    }

    const nextFlight = e =>{
        e.preventDefault();
        // console.log('next', currentFlight)
        if (currentFlight === props.data.length-1){
            currentFlight = (0)
            console.log('max array',currentFlight)
        } else {
            currentFlight = (currentFlight+1)
            // console.log('else',currentFlight)
        }
        props.updateSearch(currentFlight)
    }


    return(
        <CardDiv>
        <div className='image'>{props.data[props.flight].links.flickr_images[0] !== undefined ? <><div className='imgbtn' onClick={e => leftChange(e)}>{`<`}</div><div className='imgcont'><img src={props.data[props.flight].links.flickr_images[props.image]} alt='Flickr'/></div><div className='imgbtn' onClick={e => rightChange(e)}>></div></> : <div className='imgcont'><img src='https://www.stickpng.com/assets/images/5842a770a6515b1e0ad75afe.png' alt='Space X'/></div> }</div>
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