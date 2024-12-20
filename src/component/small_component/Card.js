

function Card({
    name, author, publisher, link
}) {

    return (
        <>
            <div className="border p-5 w-[400px] text-center ">
            <iframe src={link} width="100%" height="500px"></iframe>
                <p><span className="text-green-400 font-bold text-xl">{name}</span></p>
                <p className="text-green-300 my-2">{author}</p>
                {
                    publisher != null && (
                        <p className="mb-4">
                            <span className="bg-green-400/20 text-green-400 px-2 py-1 rounded">{publisher}</span>
                        </p>
                    )
                }
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 border border-green-400 underline my-2 bg-green-400 rounded py-2 px-3 hover:bg-transparent "
                >
                    <button className="text-white"> View</button>
                </a>
            </div>
        </>
    )
}

export default Card;