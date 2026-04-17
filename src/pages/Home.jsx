export default function Home(){
    return(
        <>
            <h1 className="text-center text-4xl font-bold my-3">Forside</h1>
            <section className="grid gap-5 mb-4">
                <p className="order-1 sm:order-0 px-4 sm:px-6">Børnelejren på Langeland er en forening, der udelukkende har til formål at sende dårligt
                stillede børn og unge sammen med deres pædagoger på et ophold i landlige omgivelser på
                det naturskønne Sydlangeland.</p>
                <figure className="flex gap-5 justify-center px-10">
                    <img src="/front.jpg" alt="Gården" className="w-[40%] hidden sm:block"/>
                    <img src="/back.jpg" alt="Gården" className="w-full object-contain sm:w-[55%]"/>
                </figure>
            </section>
            <section className="mb-30 px-4 sm:px-6">
                <p className="mb-4">Der er mange børn i verden, der ikke har det så godt, som de burde have det. Det gælder
                desværre også i Danmark. Der er børn med medfødte handicap, børn der er blevet
                alvorligt syge, børn der lider under omsorgssvigt eller bliver udsat for overgreb, børn der
                har mistet én af eller begge deres forældre, børn der er tvangsfjernet fra deres hjem og
                familie, børn der bliver mobbet i skolen, børn der vokser op i meget fattige familier, børn
                fra skilsmisse- og sammenbragte familier - vi kender allesammen et barn, der tilhører en af
                disse grupper, og det er disse børn, vi gerne vil gøre noget for.</p>
                
                <p>Foreningen Børnelejren på Langeland samler penge ind fra erhvervslivet, fonde og private
                til at sende dårligt stillede børn på et velfortjent lejrophold på Søgård. <b>Hjælp os med at
                hjælpe dem!</b></p>
            </section>
        </>
    )
}