import "./Style.css"
import { FaLinkedinIn, FaGithub} from "react-icons/fa";


function MainPage() {
  return (
    <>
    

    <div className="mini-card">
<h1>FRONT END DEVELOPER</h1>
<div className="container">

         <a href="https://github.com/Joaopnobre"> <FaGithub className="social-icon" /></a>
         <a href="https://www.linkedin.com/in/joaopaulonobre/"> <FaLinkedinIn className="social-icon"/></a>
        </div>
        </div>

    </>
  
  )
}

export default MainPage