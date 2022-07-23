import './Header.scss';
import logo from '../../assets/logo/InStock-Logo.svg'
import { Link, useHistory } from "react-router-dom";

function Header () {

    //Create history object to go back to home page
    const history = useHistory();

    const handleClick = (event) => {
        event.target.classList.add('header__nav-item--selected');
        event.target.nextSibling.classList.remove('header__nav-item--selected');
        history.push("/warehouses")
    }

    const handleClickTwo = (event) => {
        event.target.classList.add('header__nav-item--selected');
        event.target.previousSibling.classList.remove('header__nav-item--selected');
        history.push("/inventory");
    }

    return ( 
        <div className='header'>
            <img className='header__logo' src={logo} alt='logo'/>
            <ul className='header__nav'>
                <li className='header__nav-item button-text' onClick={handleClick}>
                    Warehouses
                </li>
                <li className='header__nav-item button-text' onClick={handleClickTwo}>
                    Inventory
                </li>
            </ul>
        </div>
     );
}

export default Header;