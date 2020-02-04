import React from 'react'
import PictureComponent from './PictureComponent'
import InfoComponent from './InfoComponent'




const PictureContainer = ({data}) => {

console.log(data.url)

return(

    <div>
    <h2>Here Picture and Explanation Components</h2>

    
    <PictureComponent imgUrl={data.url}/>
    <InfoComponent/>

    </div>


)

}


export default PictureContainer;