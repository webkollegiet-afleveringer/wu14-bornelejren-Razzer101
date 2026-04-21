import { IoCall, IoLogoFacebook, IoLogoInstagram, IoMail } from "react-icons/io5";

export default function Footer(){
    return(
        <footer className="bg-main w-full text-white sm:flex justify-between px-4 sm:px-6 py-2 sm:py-4 font-semibold gap-2">
            <section className="grid grid-cols-2 footer-grid sm:w-[70%] mb-3 sm:mb-0 border-b-3 sm:border-b-0 sm:border-r-3 pr-3">
                <ul className="flex flex-col mb-4 md:mb-0 locations-grid">
                    <li>
                        <h3 className="font-bold text-xl md:text-2xl">Lokationer</h3>
                    </li>
                    <li className="mb-3">
                        <h3 className="md:text-xl">Administration:</h3>
                        <p className="md:text-xl">Knud Bro Alle 1</p>
                        <p className="md:text-xl">3660 Stenløse</p>
                    </li>
                    <li>
                        <h3 className="md:text-xl">Lejren:</h3>
                        <p className="md:text-xl">Søgårdsvej 8A</p>
                        <p className="md:text-xl">5935 Bagenkop</p>
                    </li>
                </ul>
                <ul className="flex flex-col text-end">
                    <li>
                        <h3 className="font-bold text-xl md:text-2xl">Kontakt</h3>
                    </li>
                    <li className="flex justify-end">
                        <IoCall className="text-xl md:text-2xl mt-0.5 mr-0.5"/>
                        <p className="md:text-xl">38 71 12 60</p>
                    </li>
                    <li className="flex justify-end">
                        <IoMail className="text-xl md:text-2xl mt-0.5 md:mt-1 mr-0.5"/>
                        <a href="mailto:info@lejren.dk" className="md:text-xl">info@lejren.dk</a>
                    </li>
                </ul>
                <ul className="flex flex-col mb-4 md:mb-0 text-end">
                    <li>
                        <h3 className="font-bold text-xl md:text-2xl">Mobilpay</h3>
                    </li>
                    <li>
                        <p className="md:text-xl">nr.: 27231</p>
                    </li>
                </ul>
            </section>
            <ul className="flex flex-col md:text-start sm:w-[30%]">
                <li>
                    <h3 className="font-bold text-xl md:text-2xl">Vores opslag</h3>
                </li>
                <li className="flex justify-start">
                    <IoLogoFacebook className="text-xl md:text-2xl mt-0.5 md:mt-1 mr-0.5"/>
                    <a href="https://www.facebook.com/Boernelejren" target="_blank" className="underline md:text-xl">Facebook</a>
                </li>
                <li className="flex justify-start">
                    <IoLogoInstagram className="text-xl md:text-2xl mt-0.5 md:mt-1 mr-0.5"/>
                    <a href="https://www.instagram.com/Boernelejren_Langeland" target="_blank" className="underline md:text-xl">Instagram</a>
                </li>
            </ul>
        </footer>
    )
}