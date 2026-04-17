import { IoCall, IoLogoFacebook, IoMail } from "react-icons/io5";

export default function Footer(){
    return(
        <footer className="bg-main sm:fixed sm:bottom-0 w-full text-white grid grid-cols-2 md:flex justify-between px-4 sm:px-[5vw] py-2 font-semibold text-base">
            <ul className="flex flex-col mb-4 md:mb-0">
                <li>
                    <h2 className="font-bold text-xl">Sted</h2>
                </li>
                <li>
                    <p>Knud Bro Alle 1</p>
                </li>
                <li>
                    <p>3660 Stenløse</p>
                </li>
            </ul>
            <ul className="flex flex-col mb-4 md:mb-0 text-end md:text-start">
                <li>
                    <h2 className="font-bold text-xl">Kontakt</h2>
                </li>
                <li className="flex justify-end md:justify-start">
                    <IoCall className="text-xl mt-0.5 mr-0.5"/>
                    <p>38 71 12 60</p>
                </li>
                <li className="flex justify-end md:justify-start">
                    <IoMail className="text-xl mt-0.5 mr-0.5"/>
                    <a href="mailto:info@lejren.dk">info@lejren.dk</a>
                </li>
            </ul>
            <ul className="flex flex-col">
                <li>
                    <h2 className="font-bold text-xl">Mobilpay</h2>
                </li>
                <li>
                    <p>27231</p>
                </li>
            </ul>
            <ul className="flex flex-col text-end md:text-start">
                <li>
                    <h2 className="font-bold text-xl">Vores opslag</h2>
                </li>
                <li className="flex justify-end md:justify-start">
                    <IoLogoFacebook className="text-xl mt-0.5 mr-0.5 "/>
                    <a href="https://www.facebook.com/Boernelejren" target="_blank" className="underline">Facebook</a>
                </li>
            </ul>
        </footer>
    )
}