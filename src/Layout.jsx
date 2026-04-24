import { Link, Outlet } from "react-router";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function Layout(){
    return(
        <>
            <header className="flex bg-main justify-between sticky w-full top-0 sm:static">
                <Link to={"/"} className="p-2 flex">
                    <img src="/logo.svg" alt="Logo" className="rounded-sm w-43"/>
                    <h1 className="hidden lg:block self-center ml-2 text-white font-bold text-3xl">Børnelejren på Langeland</h1>
                </Link>
                <Nav/>
            </header>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}