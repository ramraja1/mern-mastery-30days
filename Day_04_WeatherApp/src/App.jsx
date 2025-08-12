import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("");

  const HandleAPI = async () => {
    if (!value.trim()) return;

    try {
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: value, // City name
            appid: "51932cb420d8f5c8b2237c0d8ed53ec0",
            units: "metric", // temperature in °C
          },
        }
      );

      setData(res.data);
      setValue("");
    } catch (error) {
      console.log(error);
      alert("City not found");
    }
  };

  return (
    <>
      <div className="main">
        <div className="search">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter city name..."
          />
          <button onClick={HandleAPI}>Search</button>
        </div>
        <hr />
        <div className="content">
          {data ? (
            <>
              <h2>{data.name}</h2>
              <p>Temperature: {data.main.temp}°C</p>
              <p>Weather: {data.weather[0].description}</p>
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="Weather Icon"
              />
            </>
          ) : (
            <p>Enter a city to get weather info</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
