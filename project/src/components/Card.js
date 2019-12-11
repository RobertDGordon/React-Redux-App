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
    div{
        margin-top: 5px;
    }
    span{
        font-weight: bold;
    }
`

const Card = (props) => {

    const [currentImg, setCurrentImg] = useState(0);

    const timestamp = moment.unix(props.data[props.flight].launch_date_unix);

    const leftChange = () =>{
        console.log('left', currentImg)
        if (currentImg === 0){
            setCurrentImg((props.data[props.flight].links.flickr_images.length-1))
            console.log('equals zero',currentImg)
        } else {
            setCurrentImg(currentImg-1)
            console.log('else',currentImg)
        }
        props.changeImage(currentImg)
    }

    const rightChange = () =>{
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


    return(
        <CardDiv>
        <div className='image'>{props.data[props.flight].links.flickr_images[0] !== undefined ? <><div className='imgbtn' onClick={leftChange}>{`<`}</div><img src={props.data[props.flight].links.flickr_images[props.image]} alt='Flickr'/> <div className='imgbtn' onClick={rightChange}>></div></> : <>Image Not Available</> }</div>
        <div className='info'>
        <div><span>Flight number:</span> {props.data[props.flight].flight_number}</div>    
        <div><span>Mission name:</span> {props.data[props.flight].mission_name}</div>    
        <div><span>Launch date:</span> {timestamp.format('MMMM Do YYYY, h:mm:ss a')}</div>    
        <div><span>Details:</span> {props.data[props.flight].details}</div>    
        </div>
        </CardDiv>
    )
}

export default Card