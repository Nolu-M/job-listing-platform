import { Link } from "react-router-dom";


const TopBar = () => {
    return (
      <div>
        <div className="bg-[#333] text-white">
          <div>
         <a href="/Home" className="Home-icon-link">
         <img src="Home.ico" alt="Home" className="Home-icon" /> </a>
         <Link to={'/'}  className="logo"> GirlCodeCareers </Link>
         </div>
        <div className="container">
          <nav className="top-bar-menu">
            <div className="bar-cta">
              <p>EMPLOYERS & RECRUITERS  | <a>Post A Job</a></p>    
            </div>
          </nav>
        </div>
     </div>
     </div>
    )                                                                                                                               
}

export default TopBar;