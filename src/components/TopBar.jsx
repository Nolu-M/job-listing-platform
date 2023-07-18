import { Link } from "react-router-dom";
import HomeLogo from '../assets/Home.ico'


const TopBar = () => {
    return (
      <div>
        <div className="bg-[#333] text-white">
          <div className='flex pt-4 pl-4'>
         <Link href="/Home" className="Home-icon-link">
         <img src={HomeLogo} alt="Home" className="w-10"/> </Link>
         <Link to={'/'}  className="ml-2 font-bold text-xl"> GirlCodeCareers </Link>
         </div>
        <div className="flex justify-end">
          <nav className="">
            <div className="">
              <p>EMPLOYERS & RECRUITERS  | <Link to={'/companies'}>Post A Job</Link></p>    
            </div>
          </nav>
        </div>
     </div>
     </div>
    )                                                                                                                               
}

export default TopBar;