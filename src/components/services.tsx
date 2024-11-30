import  "@/style/services.css";
import { FaLaptopCode } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { IoGameController } from "react-icons/io5";
import { GiSoundOn } from "react-icons/gi";
import { MdOutlineMobileScreenShare } from "react-icons/md";


export default function Services(){
    return(
        <main className="ser-container">
             {/* top div */}
            <div className="top-div-ser">
                <h2 className="title-ser">My Services</h2>
                <p className="des-ser">Amet minin mollit non  deserunt est sit aliqua dolor do
                    amet sint. velit officia consequat duis enim  velit .
                </p>
            </div>
            {/* bottom div */}
            <div className="boxes-con">
                <div className="box">
               <FaLaptopCode className="ser-icon"/> 
                    <h3>Web Development</h3>
                    <span>Blog, E-commerce</span>
                </div>
                <div className="box">
                <  MdOutlineMobileScreenShare className="ser-icon"/> 
                    <h3>UI/UX Design</h3>
                    <span>Mobile APP, websit design</span>
                </div>
                <div className="box">
               < GiSoundOn className="ser-icon"/> 
                    <h3>Sound Design</h3>
                    <span> Voice Over, Dest making</span>
                </div>
                <div className="box">
               < IoGameController className="ser-icon"/> 
                    <h3>Game Design</h3>
                    <span>game design</span>
                </div>
                <div className="box">
               <IoLogoHtml5 className="ser-icon"/> 
                    <h3>HTML</h3>
                    <span> Hyper Text Markup language</span>
                </div>
                <div className="box">
               < IoLogoCss3 className="ser-icon"/> 
                    <h3> CSS </h3>
                    <span>Cascading Style Sheets</span>
                </div>
            </div>
        </main>
       
    )
}