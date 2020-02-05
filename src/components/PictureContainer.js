import React from 'react'
import PictureComponent from './PictureComponent'
import InfoComponent from './InfoComponent'




const PictureContainer = ({data}) => {


return(

    <div>
    
    <PictureComponent imgUrl={data.url}/>
    <InfoComponent title={data.title} copy={data.copyright} explanation={data.explanation}/>

    </div>


)

}


export default PictureContainer;