import { useState } from "react"
import { IoCaretDown, IoCaretForward } from "react-icons/io5"
import SponsorForm from "../components/SponsorForm"

export default function Sponsor(){

    const [sponsDisplay1, setSponsDisplay1] = useState(false)
    const [sponsDisplay2, setSponsDisplay2] = useState(false)
    const [sponsDisplay3, setSponsDisplay3] = useState(false)

    return(
        <>
            <h1 className="text-center text-4xl font-bold my-3">Tilmelding Som Sponsor</h1>
            <section className="mb-4 px-4 sm:px-20">
                <h2 className="mb-5 text-xl">
                    Da det er meget individuelt, hvor meget en virksomhed kan og ønsker at støtte med, har vi
                    opdelt støttemulighederne i <b>3 kategorier</b>:
                </h2>
                <div className="mb-5 flex flex-col">
                    <button onClick={() => {
                        setSponsDisplay1(sponsDisplay1 ? false : true);
                        setSponsDisplay2(false);
                        setSponsDisplay3(false)
                    }} className={`font-bold text-xl text-start p-2 flex justify-between rounded-t-sm ${sponsDisplay1 ? "" : "rounded-b-sm"} bg-main text-white`}>
                        <span>Børnesponsorat</span>
                        <span><IoCaretForward className={`${sponsDisplay1 ? "hidden" : "block"} text-3xl`}/> <IoCaretDown className={`${sponsDisplay1 ? "block" : "hidden"} text-3xl`}/></span>
                    </button>
                    <p className={`${sponsDisplay1 ? "block" : "hidden"} border-b-2 border-x-2 p-3 text-xl border-main rounded-b-sm`}>
                        Hvis din virksomhed vælger at blive børnesponsor, dækker I omkostningerne for et
                        navngivet barns ophold og transport til og fra Langeland. Prisen pr. barn varierer fra lejr til
                        lejr, men vi har fastsat en gennemsnitspris på kr. 4.000,- pr. barn for et ophold. Denne pris
                        inkluderer transport, forplejning, forsikring, udflugter, adgangsbilletter til udflugtsmålene,
                        smågaver og slik til ét barn.
                    </p>
                </div>
                <div className="mb-5 flex flex-col">
                    <button onClick={() => {
                        setSponsDisplay2(sponsDisplay2 ? false : true);
                        setSponsDisplay3(false);
                        setSponsDisplay1(false)
                    }} className={`font-bold text-xl text-start p-2 flex justify-between rounded-t-sm ${sponsDisplay2 ? "" : "rounded-b-sm"} bg-main text-white`}>
                        <span>Lejrsponsorat</span>
                        <span><IoCaretForward className={`${sponsDisplay2 ? "hidden" : "block"} text-3xl`}/> <IoCaretDown className={`${sponsDisplay2 ? "block" : "hidden"} text-3xl`}/></span>
                    </button>
                    <p className={`${sponsDisplay2 ? "block" : "hidden"} border-b-2 border-x-2 p-3 text-xl border-main rounded-b-sm`}>
                        For kr. 2.000,- kan virksomheden blive lejrsponsor og være med til at dække alle
                        omkostningerne ved børnelejren, som bl.a. omfatter ejendommens drifts- og
                        vedligeholdelsesomkostninger samt eventuelle ekstra udgifter omkring en lejr, der f.eks.
                        kan være løn til specialuddannet personale.
                    </p>
                </div>
                <div className="flex flex-col">
                    <button onClick={() => {
                        setSponsDisplay3(sponsDisplay3 ? false : true);
                        setSponsDisplay1(false);
                        setSponsDisplay2(false)
                    }} className={`font-bold text-xl text-start p-2 flex justify-between rounded-t-sm ${sponsDisplay3 ? "" : "rounded-b-sm"} bg-main text-white`}>
                        <span>Støtte til foreningen</span>
                        <span><IoCaretForward className={`${sponsDisplay3 ? "hidden" : "block"} text-3xl`}/> <IoCaretDown className={`${sponsDisplay3 ? "block" : "hidden"} text-3xl`}/></span>
                    </button>
                    <p className={`${sponsDisplay3 ? "block" : "hidden"} border-b-2 border-x-2 p-3 text-xl border-main rounded-b-sm`}>
                        Virksomheder, der ønsker at støtte foreningens arbejde med et mindre beløb, kan vælge
                        at blive diplomsponsorer. Af administrative årsager skal der minimum støttes med kr.
                        1.000,- for at man kan modtage et trykt diplom til ophængning i virksomheden, men alle
                        støttebeløb - store som små - er naturligvis velkomne.
                    </p>
                </div>
            </section>
            <SponsorForm/>
        </>
    )
}