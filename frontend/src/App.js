import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";

const App = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("/cars")
        .then((response) => setCars(response.data))
        .catch((error) => console.log(error));
  }, []);

  return (
      <div>
        <h1>Electric Vehicles</h1>
        <ul>
          {cars.map((car) => (
              <li key={car.id}>{car.make} {car.model}</li>
          ))}
        </ul>
      </div>
  )
}

export default App;
