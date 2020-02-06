import React from 'react'





const PictureComponent = props => {



return(


 <img className='pic' src={props.imgUrl} alt={props.title} ></img>


)

}


export default PictureComponent;