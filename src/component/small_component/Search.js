import { useRef, useState } from "react";

console.log("hi")
function Search(){

    let search=useRef()
    const [pdfvalue,setpdfvalue] =useState("d");


    const submitHandle=()=>{
    console.log(pdfvalue);
    }
    return (
        <>
        <input ref={search} type="text" onChange={(e)=>setpdfvalue(e.target.value)} value={pdfvalue} placeholder="Search Here" className="p-2 border rounded"></input>
        <button onClick={submitHandle} className="bg-green-700 hover:bg-green-600 text-white p-3 rounded">Search</button>
        </>
    )
}

export default Search;
