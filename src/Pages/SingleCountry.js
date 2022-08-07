import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./singleCountry.scss";


export const SingleCountry = () => {
  const { name } = useParams();
  const [country, setCountry] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((data) => setCountry(data))
      .catch((error) => console.error(error));
  }, []);

  console.log(country);

  return (
    <>
      <h1>single page {name}</h1>
      <button onClick={() => navigate(-1)}> prev</button>
      {country.length && country.map(el => ( <div className="d-flex align-items-center p-5">

        <img className="mx-5" src={el.flags.svg} alt="el.name.common" width={560} height={400}/>
        <div className="ms-5">
            <h1>{name}</h1>
            <div className="d-flex">
                <div >
                    <p>Native Name: <span className="single-page-span" >{el.name.nativeName[Object.keys(el.name.nativeName)[0]].common}</span></p>
                    <p>Population: <span className="single-page-span" >{el.population}</span></p>
                    <p>Region: <span className="single-page-span" >{el.region}</span></p>
                    <p>Sub Region: <span className="single-page-span" >{el.subregion}</span></p>
                    <p>Capital: <span className="single-page-span" >{el.capital}</span></p>

                </div>

                <div className="ms-5">
                    <p>Top Level Domain: <span className="single-page-span" >{el.tld}</span></p>
                    <p>Currencies: <span className="single-page-span" >{el.currencies[Object.keys(el.currencies)[0]].name}</span></p>
                    <p>Languages: <span className="single-page-span" >{el.languages[Object.keys(el.languages)[0]]}</span></p>

                </div>
            </div>

                <p>Borders: {el?.borders?.length && el.borders.map(el => <button className="btn btn-light">{el}</button> )}</p>
        </div>

        </div>))}
    </>
  );
};
