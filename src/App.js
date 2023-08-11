// import "./App.css";
// import axios from "axios";

// const url = `https://api.openweathermap.org/data/2.5/weather?q=Rojhan&appid=ed4c1afddb3f4c7ef46299cd32c3d284`;
// function App() {
//   return (
//     <div className="App">
//       <div className="container">
//         <div className="top">
//           <h1 className="header">Weather App</h1>
//           <div className="location-box">
//             <div className="location">Rojhan</div>
//             <div className="date">Date</div>
//           </div>
//           <div className="weather-box">
//             <div className="temp">Temperature</div>
//             <div className="weather">Weather</div>
//           </div>

//           <div className="search-box">
//             <input type="text" className="search-bar" placeholder="Search..." />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=Rojhan&appid=ed4c1afddb3f4c7ef46299cd32c3d284`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  // const temp = data.main.temp;

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°F</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
