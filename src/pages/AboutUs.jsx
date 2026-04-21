export default function AboutUs(){
    return(
        <>
            <h1 className="text-center text-4xl font-bold my-3">Om os</h1>
            <section className="mb-5 px-4 sm:px-6 grid lg:grid-cols-2 gap-5">
                <p className="text-xl">
                    Børnelejren på Langeland er en velgørende, non-profit forening, som afholder
                    finansierede lejre for dårligt stillede børn og unge fra hele landet. Børnelejrene bliver
                    afholdt på foreningens bondegård, Søgård Hovedgård, som ligger i naturskønne
                    omgivelser på sydspidsen af Langeland. Samtlige omkostninger til alle børns ophold og
                    transport til/fra lejren bliver finansieret af foreningen, og det er et krav fra foreningens
                    side, at der ikke opkræves brugerbetaling af børnenes forældre for opholdet på Søgård.
                </p>
                <figure className="flex items-start justify-center px-[5vw] lg:p-0">
                    <img src="/center.jpg" alt="Gården" className="w-full"/>
                </figure>
            </section>
            <section className="mb-5 px-4 sm:px-6 md:mb-26 lg:mb-41 xl:mb-47 2xl:mb-81">
                <p className="mb-4 text-xl">
                    Foreningens bestyrelse og frivillige hjælpere arbejder ulønnet for Foreningen.
                    Medarbejderne fra institutionerne på foreningens lejre, får ikke kolonitillæg udbetalt af
                    Foreningen.
                </p>

                <p className="mb-4 text-xl">
                    Det er primært virksomheder og støttemedlemmer, der finansierer foreningens drift og
                    aktiviteter. Vi har heldigvis erfaret, at rigtig mange virksomheder er villige til at bakke op
                    omkring lejren, ligesom vi håber på endnu flere private, passive støttemedlemmer.
                </p>

                <p className="text-xl">
                    Alle skriftlige henvendelser vedrørende Foreningen Børnelejren på Langeland og Søgård
                    Hovedgård bedes venligst sendt til Knud Bro Alle 1, st. mf., 3660 Stenløse. Telefoniske
                    henvendelser bedes ligeledes rettet til sekretariatet på telefon 38711260. Foreningens
                    formand er dagligt at træffe i sekretariatet.
                </p>
            </section>
        </>
    )
}