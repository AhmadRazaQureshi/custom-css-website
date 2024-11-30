import "@/style/hero.css";
import Image from "next/image";
import { PiX } from "react-icons/pi";



function Hero(){
    return (
        <div className="header-container">
            <div className="header-boxes-con">
                {/* left side  */}
                <div>
                    <Image src={"/ahmad.jpg"}
                      width={400}
                      height={400}
                      className="header-image"
                    
                    alt="profile"/>

                    
                </div>
                {/* right side  */}
                <div className="hero-right-div">
                    <h1 className="title-hero"> I m  Ahmad Raza Qureshi 
                        front-end developer 
                    </h1>
                    <p className="des-hero">
                    We are passionate about creating innovative and user-friendly websites that meet the needs of our clients
          . With expertise in HTML, CSS, JavaScript, and Next.js, we strive to deliver high-quality web solutions 
          tailored to your specific requirements.
          Our mission is to provide exceptional service and ensure your  online presence 
          stands out. Whether you need a personal blog, a corporate website, or an e-commerce platform,
          we have the skills and experience to bring your vision to life.
                    </p>
                    {/* <button className="hero-btn">Hire Me</button> */}
                </div>

            </div>
  
        </div>
    )
}
export default Hero