import React, { useState, useEffect} from "react";
import "./App.css";
import axios from "axios"
import PictureContainer from './components/PictureContainer'


function App() {

  
  const [nasaData, setNasaData] = useState([])


  useEffect(() => {
    
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=urO6Wz3YwjlsGSzUcdlAsH2IlKwAIpTxHmZ9Tli2`)
      .then(response => {
        
        setNasaData(response.data)
        
      })
      .catch(error => console.log(error));
  }, []);








  return (
    <div className="App">
      
      <h1>Astronomy Picture of the Day </h1>
      <p>
      Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer. 
      </p>

      <PictureContainer data={nasaData} />

    </div>
  );
}

export default App;
