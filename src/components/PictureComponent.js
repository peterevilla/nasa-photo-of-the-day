import React from 'react'
import CarImg, { CardImg } from 'reactstrap'





const PictureComponent = props => {



return(


 <CardImg className='pic' src={props.imgUrl} alt={props.title} ></CardImg>


)

}


export default PictureComponent;