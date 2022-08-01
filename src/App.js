import { Header } from "./components";
import { Hero } from "./components";
import { List } from "./components";
import { Card } from "./components";
import { useRef, useEffect, useState } from "react";
import "./app.scss";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(data);

  return (
    <div className="App">
      <div className="div">
        <Header />

        <Hero />

        <ul className="d-flex alig-items-center justify-content-between list ">
          {data.length &&
            data.map((el) => <Card key={el.name.common} el={el} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
