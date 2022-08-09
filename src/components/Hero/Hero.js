import "./hero.scss";
import { useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

export const Hero = ({ setSellect, setSearch }) => {
  const elInput = useRef('')
  const catchInputValue = (evt) => {
    evt.preventDefault();
    setSearch(elInput.current.value);
  };

  const catchSelect = (evt) =>{
    evt.preventDefault();
    setSellect(evt.target.value);

  }

  const {theme } = useContext(ThemeContext)

  return (
    <div className={`${theme} hero  px-5`}>
      <form onSubmit={catchInputValue} className="hero__form form px-5">
        <input
          ref={elInput}
          className={`${theme} hero__form-input form-control w-100 `}
          type="search"
          placeholder="🔍   Search for a country…"
        />

        <select
          onChange={catchSelect}
          className={`${theme} hero__form-select form-select w-25 ms-5`}
        >
          <option className="hero__form-select-option" value="All">
            All
          </option>
          <option className="hero__form-select-option" value="Africa">
            Africa
          </option>
          <option className="hero__form-select-option" value="America">
            America
          </option>
          <option className="hero__form-select-option" value="Asia">
            Asia
          </option>
          <option className="hero__form-select-option" value="Europe">
            Europe
          </option>
          <option className="hero__form-select-option" value="Oceania">
            Oceania
          </option>

        </select>
      </form>
    </div>
  );
};
