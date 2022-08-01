import './hero.scss'

export const Hero = () => {
    return (
        <div className='hero  px-5'>
        <form className='hero__form form px-5'>
            <input className='hero__form-input form-control w-100' type="search" placeholder='🔍   Search for a country…' />

            <select className='hero__form-select form-select w-25 ms-5' name="" id="">
                <option className='hero__form-select-option' defaultValue='Filter by Region' value="1">Filter by Region</option>
                <option className='hero__form-select-option' value="2">Africa</option>
                <option className='hero__form-select-option' value="3">America</option>
                <option className='hero__form-select-option' value="4">Asia</option>
                <option className='hero__form-select-option' value="5">Europe</option>
                <option className='hero__form-select-option' value="6">Oceania</option>
            </select>
        </form>
    </div>
    )
}