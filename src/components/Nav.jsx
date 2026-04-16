import { Link } from "react-router";

export default function Nav(){
    return(
        <nav className="flex items-center pr-5 mb-1">
            <ul className="flex gap-8">
                <li className="text-2xl hover:underline">
                    <Link to={"/"}>Home</Link>
                </li>
                <li className="text-2xl hover:underline">
                    <Link to={"/omos"}>Om os</Link>
                </li>
                <li className="text-2xl hover:underline">
                    <Link to={"/sponsering"}>Sponsering</Link>
                </li>
                <li className="text-2xl hover:underline">
                    <Link to={"/takker"}>Vi takker</Link>
                </li>
            </ul>
        </nav>
    )
}