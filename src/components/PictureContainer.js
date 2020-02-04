import React from 'react'
import PictureComponent from './PictureComponent'
import InfoComponent from './InfoComponent'




const PictureContainer = ({data}) => {

console.log(data.url)

return(

    <div>
    <h2>Here Picture and Explanation Components</h2>

    
    <PictureComponent imgUrl={data.url}/>
    <InfoComponent title={data.title} copy={data.copyright} explanation={data.explanation}/>

    </div>


)

}


export default PictureContainer;