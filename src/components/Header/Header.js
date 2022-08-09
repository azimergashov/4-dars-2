
import './header.scss'
import { ThemeContext } from '../../context/ThemeContext';
import { useContext,  } from 'react';



export const Header = () =>{
    const {theme, setTheme} = useContext(ThemeContext)
    const getValue = (evt) =>{
        setTheme(evt.target.value);
    }


    return (
        <header className={`${theme}  header pb-5 pt-4`}>
        <div className='header__div container mt-5'>
            <strong className={`${theme} header__req`}>Where in the world?</strong>

            <select defaultValue={theme} onClick={ getValue} className='header__mode ' >
                <option value="Linght">🌞Light Mode</option>
                <option value="Dark">🌑 Dark Mode</option>
            </select>


        </div>
    </header>
    )
}