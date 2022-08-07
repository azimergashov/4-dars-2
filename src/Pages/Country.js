
import { Hero } from "../components";
import { Card } from "../components";

export const Country = ({data, setSearch, setSellect}) =>{
    return (
        <>
         <Hero setSellect={setSellect} setSearch={setSearch} />
          <ul className="d-flex alig-items-center justify-content-between list ">
            {data.length &&
              data.map((el) => <Card key={el.name.common} el={el} />)}
          </ul>
        </>
    )
}