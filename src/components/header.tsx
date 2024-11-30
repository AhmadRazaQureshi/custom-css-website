import Link from "next/link";
import "../style/header.css";
import { DiVim } from "react-icons/di";

export default function Header(){
    return(
        <div className="header">
                {/* left side */}
                <div>
                    <h1 className="logo">A R Q</h1>
                    </div>
                {/* right side  */}
                <div className="header-right-div">
                    
                    <ul className="header-links">
                        <li>
                            <Link  className="nav-links" href="/">Home</Link>
                        </li>
                        <li>
                            <Link  className="nav-links" href="/">About</Link>
                        </li>
                        <li>
                            <Link  className="nav-links" href="/">Contact</Link>
                        </li>
                    </ul>
                </div>
          
        </div>
        
    )
}