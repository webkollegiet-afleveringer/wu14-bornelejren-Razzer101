import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router";

export default function Nav(){

    const [menuDisplay, setMenuDisplay] = useState(false)

    return(
        <nav className="flex items-center  pr-[2vw] mb-1">
            <ul className="gap-7 hidden sm:flex text-white">
                <li className="text-2xl font-semibold hover:underline">
                    <Link to={"/"}>Home</Link>
                </li>
                <li className="text-2xl font-semibold hover:underline">
                    <Link to={"/omos"}>Om os</Link>
                </li>
                <li className="text-2xl font-semibold hover:underline">
                    <Link to={"/sponsering"}>Sponsering</Link>
                </li>
                <li className="text-2xl font-semibold hover:underline">
                    <Link to={"/takker"}>Vi takker</Link>
                </li>
            </ul>
            <button onClick={() => setMenuDisplay(menuDisplay ? false : true)} className="sm:hidden text-5xl text-white border-3 p-1 rounded-sm">
                <IoMenu className={`${menuDisplay ? "hidden" : ""}`} />
                <IoClose className={`${menuDisplay ? "" : "hidden"}`}/>
            </button>
            <ul className={`${menuDisplay ? "flex" : "hidden"} flex-col items-center sm:hidden h-[calc(100%-87px)] gap-5 py-5 w-[50%] bg-white border-l-3 border-main absolute top-21.75 right-0 z-5`}>
                <li className="text-2xl font-semibold hover:underline">
                    <Link to={"/"}>Home</Link>
                </li>
                <li className="text-2xl font-semibold hover:underline">
                    <Link to={"/omos"}>Om os</Link>
                </li>
                <li className="text-2xl font-semibold hover:underline">
                    <Link to={"/sponsering"}>Sponsering</Link>
                </li>
                <li className="text-2xl font-semibold hover:underline">
                    <Link to={"/takker"}>Vi takker</Link>
                </li>
            </ul>
        </nav>
    )
}