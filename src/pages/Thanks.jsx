import { useLoaderData } from "react-router"

export default function Thanks(){

    const {sponsorNames: nameData} = useLoaderData()

    return(
        <>
            <h1 className="text-center text-4xl font-bold my-5">Børnelejren takker</h1>
            <p className="mb-10 px-4 sm:px-20 text-xl">
                Børnelejren på Langeland takker <b>alle</b>, der på den ene eller anden måde, har støttet
                foreningens arbejde med at sende dårligt stillede børn på et ophold på Søgård Hovedgård
                - det være sig ved naturaliesponsorater eller økonomisk støtte fra støttemedlemmer,
                virksomhedssponsorer og donationer fra fonde.
            </p>
            <section className="text-center text-2xl font-bold my-3 base: mb-5 md:mb-17 lg:mb-24 xl:mb-31">
                <h2 className="mb-3">En særlig tak til:</h2>
                <ul className="font-normal text-xl">
                    {
                        nameData.map((itemName, index) => {
                            return(
                                <li className="mb-3" key={index}>{itemName}</li>
                            )
                        })
                    }
                </ul>
            </section>
        </>
    )
}