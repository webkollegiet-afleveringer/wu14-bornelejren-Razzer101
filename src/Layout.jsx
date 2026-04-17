import { Link, Outlet } from "react-router";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function Layout(){
    return(
        <>
            <header className="flex bg-main justify-between">
                <Link to={"/"} className="w-45 p-2">
                    <img src="/logo.svg" alt="Logo" className="w-full rounded-sm"/>
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