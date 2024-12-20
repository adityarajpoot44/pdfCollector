import { useContext } from "react";
import SearchContext from "./globaldata/SearchContext";

console.log("hi")
function Search(){

    const { searchValue, setSearchValue } = useContext(SearchContext);
    return (
        <>
        <input type="text" onChange={(e)=>setSearchValue(e.target.value)} value={searchValue} placeholder="Search by name" className="outline-none p-2 border rounded w-[90%] md:w-[40%] lg:w-[30%] text-center"></input>
        </>
    )
}

export default Search;