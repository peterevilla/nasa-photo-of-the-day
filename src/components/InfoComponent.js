import React from 'react'
import "../App.css";




const InfoComponent = props => {



return(


<div>
    
<h3>Title: {props.title} </h3>
     
    <p>Copyright: {props.copy} </p>
    <p className="exp" >Explanation: {props.explanation} </p>
    

</div>


)

}


export default InfoComponent;