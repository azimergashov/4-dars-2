import "./app.scss";
import { Header } from "./components";
import { useEffect, useState } from "react";
import {Routes, Route } from 'react-router-dom'
import { SingleCountry } from "./Pages/SingleCountry";
import {Country} from './Pages/Country'


function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sellect, setSellect] = useState("");

  useEffect(() => {
    if (search.length) {
      fetch(`https://restcountries.com/v3.1/name/${search}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    } else if (sellect.length && sellect !== "All") {
      fetch(`https://restcountries.com/v3.1/region/${sellect}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    } else {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    }
  }, [search, sellect]);

  return (
    <div className="App">
      <div className="div">
        <Header />

        <Routes>
          <Route path="/" element = {<Country data ={data} setSellect ={setSellect} setSearch ={setSearch}/>}/>

          <Route path="/countries/:name" element= {<SingleCountry/>}/>
        </Routes>


      </div>
    </div>
  );
}

export default App;
