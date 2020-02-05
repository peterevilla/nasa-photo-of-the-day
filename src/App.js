import React, { useState, useEffect} from "react";
import "./App.css";
import axios from "axios"
import PictureContainer from './components/PictureContainer'
import DateDrop from './components/dateDrop'


function App() {

  
  const [nasaData, setNasaData] = useState([])
  
const [date, setDate] = useState('2020-02-05')



  useEffect(() => {
    
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then(response => {
        
        setNasaData(response.data)
        setDate(response.data.date)
        
      })
      .catch(error => console.log(error));
  }, [date]);



 




  const changeDate = () => {


    setDate('2020-02-04')
  }



  return (
    <div className="App">
      
      <h1>Astronomy Picture of the Day </h1>
      <p>
      Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer. 
      </p>

      <PictureContainer data={nasaData} />
      <DateDrop date={nasaData.date}/>
      <button onClick={changeDate}>Change Date</button>

    </div>
  );
}

export default App;
