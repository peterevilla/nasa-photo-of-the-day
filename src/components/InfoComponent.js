import React from 'react'
import "../App.css";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, UncontrolledCollapse
  } from 'reactstrap';




const InfoComponent = props => {



return(


<div>

   <Button color="info" id="toggler" style={{ marginBottom: '1rem' }}>
      Info
    </Button> 
    
   
<UncontrolledCollapse toggler="#toggler">
     
     `````<CardTitle>Title: {props.title}</CardTitle>
          
          <p>Copyright: {props.copy} </p>
          <p className="exp" >{props.explanation} </p>
     </UncontrolledCollapse>
    
</div>


)

}


export default InfoComponent;


