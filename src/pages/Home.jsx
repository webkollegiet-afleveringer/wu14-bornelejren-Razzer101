import { Link } from "react-router";
import Nav from "../components/Nav";

export default function Home(){
    return(
        <>
            <header className="border-b-2 border-main flex justify-between">
                <Link to={"/"} className="w-45 p-2">
                    <img src="/logo.png" alt="Logo" className="w-full rounded-sm"/>
                </Link>
                <Nav/>
            </header>
        </>
    )
}