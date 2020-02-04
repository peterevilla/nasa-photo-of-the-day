import React from 'react'




const InfoComponent = props => {



return(


<div>
    
<h3>Title: {props.title} </h3>
     
     <p>Copyright: {props.copy} </p>
<p>Explanation: {props.explanation} </p>
    

</div>


)

}


export default InfoComponent;