import React from 'react'
import PictureComponent from './PictureComponent'
import InfoComponent from './InfoComponent'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, Row
  } from 'reactstrap';




const PictureContainer = ({data}) => {


return(

    <div>
       <Row> 
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
    
            <PictureComponent imgUrl={data.url}/>

            <CardBody>
            <InfoComponent title={data.title} copy={data.copyright} explanation={data.explanation}/>
            </CardBody>
        </Card>
        </Col>
        </Row> 
    </div>
        

)

}


export default PictureContainer;