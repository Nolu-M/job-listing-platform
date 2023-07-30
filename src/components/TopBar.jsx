import { Link } from "react-router-dom";
import HomeLogo from '../assets/Home.ico'
import Profile from "./Profile"
import Logout from './Logout'
import LoginComp from './LoginButton'
import { Dropdown } from 'rsuite'
import AdminIcon from '@rsuite/icons/Admin';
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";




const TopBar = () => {
    return (
      <div>
        <div className="bg-[#333] text-white flex justify-between">
          <div className='flex pt-4 pl-4'>
            <Link href="/Home" className="Home-icon-link">
              <img src={HomeLogo} alt="Home" className="w-10"/> </Link>
            <Link to={'/'}  className="ml-2 font-bold text-xl"> GirlCodeCareers </Link>
        </div>
        <div className="flex gap-6 p-6">
          <div className="">
            <p>EMPLOYERS & RECRUITERS  | <Link to={'/companies'}>Post A Job</Link></p>
          </div>
          <div><Profile/></div>
          <Dropdown icon={<AdminIcon/>}>
            <DropdownItem>
              <LoginComp/>
            </DropdownItem>
            <DropdownItem>
              <Logout/>
            </DropdownItem>
          </Dropdown>
        </div>
     </div>
     </div>
    )                                                                                                                               
}

export default TopBar;