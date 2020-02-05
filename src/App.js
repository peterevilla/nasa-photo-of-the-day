import React, { useState, useEffect} from "react";
import "./App.css";
import axios from "axios"
import PictureContainer from './components/PictureContainer'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


function App() {
const [nasaData, setNasaData] = useState([])
const dateObj = new Date();

const [startDate, setStartDate] = useState(dateObj);

const month = startDate.getUTCMonth() + 1; //months from 1-12
const day = startDate.getUTCDate();
const year = startDate.getUTCFullYear();
const tday = year + "-" + month + "-" + day;


//const [date, setDate] = useState(tday)

console.log(tday)





  useEffect(() => {
    
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${tday}`)
      .then(response => {
        
        setNasaData(response.data)
        //setDate(response.data.date)
        
      })
      .catch(error => console.log(error));
  }, [tday]);


  return (
    <div className="App">
      
      <h1>Astronomy Picture of the Day </h1>
      <p>
      Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer. 
      </p>

      <PictureContainer data={nasaData} />
      
     <h3>Select a date:</h3>
     <DatePicker
      dateFormat="yyyy-MM-dd"
      selected={startDate}
      onChange={date => setStartDate(date)}
    />



    </div>
  );
}

export default App;
