import { useRef, useState } from "react"
import { IoCaretForward } from "react-icons/io5"
import SponsorForm from "../components/SponsorForm"
import gsap from "gsap"

export default function Sponsor(){

    const [sponsDisplay1, setSponsDisplay1] = useState(false)
    const [sponsDisplay2, setSponsDisplay2] = useState(false)
    const [sponsDisplay3, setSponsDisplay3] = useState(false)
    const carretArrow1 = useRef()
    const carretArrow2 = useRef()
    const carretArrow3 = useRef()
    const info1 = useRef()
    const info2 = useRef()
    const info3 = useRef()
    const handleClick = (id) => {
        if(id === "børnesponsorat"){
            setSponsDisplay1(sponsDisplay1 ? false : true);
            sponsDisplay1 ? gsap.to(carretArrow1.current, {rotateZ: 0,duration: 0.2}) : gsap.to(carretArrow1.current, {rotateZ: 90,duration: 0.2})
            sponsDisplay1 ? gsap.to(info1.current, {height: "0", borderBottom: "none", paddingTop: "0", paddingBottom: "0", duration: 0.2}) : gsap.to(info1.current, {height: "auto", borderBottom: "2px solid #d0000b", paddingTop: "12px", paddingBottom: "12px", duration: 0.2})
            setSponsDisplay2(false)
            gsap.to(carretArrow2.current, {rotateZ: 0,duration: 0.2})
            gsap.to(info2.current, {height: "0", borderBottom: "none", paddingTop: "0", paddingBottom: "0", duration: 0.2})
            setSponsDisplay3(false)
            gsap.to(carretArrow3.current, {rotateZ: 0,duration: 0.2})
            gsap.to(info3.current, {height: "0", borderBottom: "none", paddingTop: "0", paddingBottom: "0", duration: 0.2})
        } else if(id === "lejrsponsorat"){
            setSponsDisplay2(sponsDisplay2 ? false : true);
            sponsDisplay2 ? gsap.to(carretArrow2.current, {rotateZ: 0,duration: 0.2}) : gsap.to(carretArrow2.current, {rotateZ: 90,duration: 0.2})
            sponsDisplay2 ? gsap.to(info2.current, {height: "0", borderBottom: "none", paddingTop: "0", paddingBottom: "0", duration: 0.2}) : gsap.to(info2.current, {height: "auto", borderBottom: "2px solid #d0000b", paddingTop: "12px", paddingBottom: "12px", duration: 0.2})
            setSponsDisplay1(false)
            gsap.to(carretArrow1.current, {rotateZ: 0,duration: 0.2})
            gsap.to(info1.current, {height: "0", borderBottom: "none", paddingTop: "0", paddingBottom: "0", duration: 0.2})
            setSponsDisplay3(false)
            gsap.to(carretArrow3.current, {rotateZ: 0,duration: 0.2})
            gsap.to(info3.current, {height: "0", borderBottom: "none", paddingTop: "0", paddingBottom: "0", duration: 0.2})
        } else if(id === "foreningen"){
            setSponsDisplay3(sponsDisplay3 ? false : true);
            sponsDisplay3 ? gsap.to(carretArrow3.current, {rotateZ: 0,duration: 0.2}) : gsap.to(carretArrow3.current, {rotateZ: 90,duration: 0.2})
            sponsDisplay3 ? gsap.to(info3.current, {height: "0", borderBottom: "none", paddingTop: "0", paddingBottom: "0", duration: 0.2}) : gsap.to(info3.current, {height: "auto", borderBottom: "2px solid #d0000b", paddingTop: "12px", paddingBottom: "12px", duration: 0.2})
            setSponsDisplay1(false)
            gsap.to(carretArrow1.current, {rotateZ: 0,duration: 0.2})
            gsap.to(info1.current, {height: "0", borderBottom: "none", paddingTop: "0", paddingBottom: "0", duration: 0.2})
            setSponsDisplay2(false)
            gsap.to(carretArrow2.current, {rotateZ: 0,duration: 0.2})
            gsap.to(info2.current, {height: "0", borderBottom: "none", paddingTop: "0", paddingBottom: "0", duration: 0.2})
        }
    }

    return(
        <>
            <h1 className="text-center text-4xl font-bold my-5">Tilmelding Som Sponsor</h1>
            <section className="mb-4 px-4 sm:px-20">
                <h2 className="mb-5 text-xl">
                    Da det er meget individuelt, hvor meget en virksomhed kan og ønsker at støtte med, har vi
                    opdelt støttemulighederne i <b>3 kategorier</b>:
                </h2>
                <div className="mb-5 flex flex-col">
                    <button onClick={() => handleClick("børnesponsorat")} className={`font-bold text-xl text-start p-2 flex justify-between rounded-t-sm ${sponsDisplay1 ? "" : "rounded-b-sm"} bg-main text-white`}>
                        <span>Børnesponsorat</span>
                        <span ref={carretArrow1}><IoCaretForward className="text-3xl"/></span>
                    </button>
                    <p ref={info1} className="border-x-2 px-3 text-xl h-0 border-main rounded-b-sm overflow-hidden">
                        Hvis din virksomhed vælger at blive børnesponsor, dækker I omkostningerne for et
                        navngivet barns ophold og transport til og fra Langeland. Prisen pr. barn varierer fra lejr til
                        lejr, men vi har fastsat en gennemsnitspris på kr. 4.000,- pr. barn for et ophold. Denne pris
                        inkluderer transport, forplejning, forsikring, udflugter, adgangsbilletter til udflugtsmålene,
                        smågaver og slik til ét barn.
                    </p>
                </div>
                <div className="mb-5 flex flex-col">
                    <button onClick={() => handleClick("lejrsponsorat")} className={`font-bold text-xl text-start p-2 flex justify-between rounded-t-sm ${sponsDisplay2 ? "" : "rounded-b-sm"} bg-main text-white`}>
                        <span>Lejrsponsorat</span>
                        <span ref={carretArrow2}><IoCaretForward className="text-3xl"/></span>
                    </button>
                    <p ref={info2} className="border-x-2 px-3 text-xl h-0 border-main rounded-b-sm overflow-hidden">
                        For kr. 2.000,- kan virksomheden blive lejrsponsor og være med til at dække alle
                        omkostningerne ved børnelejren, som bl.a. omfatter ejendommens drifts- og
                        vedligeholdelsesomkostninger samt eventuelle ekstra udgifter omkring en lejr, der f.eks.
                        kan være løn til specialuddannet personale.
                    </p>
                </div>
                <div className="flex flex-col">
                    <button onClick={() => handleClick("foreningen")} className={`font-bold text-xl text-start p-2 flex justify-between rounded-t-sm ${sponsDisplay3 ? "" : "rounded-b-sm"} bg-main text-white`}>
                        <span>Støtte til foreningen</span>
                        <span ref={carretArrow3}><IoCaretForward className="text-3xl"/></span>
                    </button>
                    <p ref={info3} className="border-x-2 px-3 text-xl h-0 border-main rounded-b-sm overflow-hidden">
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