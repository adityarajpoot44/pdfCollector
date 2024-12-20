import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import Card from "./small_component/Card.js";
import SearchContext from "./small_component/globaldata/SearchContext.js";

function Home() {

    const [data, setdata] = useState([]);
    const { searchValue,setSearchValue } = useContext(SearchContext);
    useEffect(() => {

        axios.get("https://api.npoint.io/dee51ea017d20efdfcc8")
            .then((response) => {
                const filteredItems = searchValue
                    ? response.data.filter((item) =>
                        item.name.toLowerCase().includes(searchValue.toLowerCase())
                    )
                    : response.data;
                setdata(filteredItems)
            })

    }, [searchValue])

const Handlereset=()=>{
    setSearchValue("")
}


    return (
        <>
            <div className="bg-black">
            <button onClick={Handlereset} className="text-white border border-green-400 bg-green-400 hover:bg-transparent p-2 rounded float-right mt-4 mr-8">Back</button>
                <div className="w-[80%] m-auto py-10" >
                    <div className="flex flex-wrap gap-4 justify-evenly">
                        {data.map((data, index) => (
                            <Card key={index} name={data.name} author={data.author} publisher={data.published} link={data.link} />
                        ))}

                    </div>

                </div>
            </div>

        </>
    )
}

export default Home;
