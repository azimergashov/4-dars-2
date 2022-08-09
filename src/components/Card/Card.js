import "./card.scss";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

export const Card = ({ el }) => {
  const {theme} = useContext(ThemeContext)
  return (
    <Link to = {"/countries/" +el.name.common }>
      <li className={`card__li ${theme} `}>
        <img
          className="card__img"
          src={el.flags.svg}
          alt={el.name.oficial}
          width={400}
          height={200}
        />
        <div className="card__div">
          <h2 className="card__header mt-4 mb-3">{el.name.common}</h2>

          <ul className="card__list ">
            <li className="card__item">
              <p className="card__text">
                <span className="card__text-span">Population:</span>{" "}
                {el.population}
              </p>
            </li>

            <li className="card__item">
              <p className="card__text">
                <span className="card__text-span">Region:</span> {el.continents}
              </p>
            </li>

            <li className="card__item">
              <p className="card__text">
                <span className="card__text-span">Capital:</span> {el.capital}
              </p>
            </li>
          </ul>
        </div>
      </li>
    </Link>
  );
};
