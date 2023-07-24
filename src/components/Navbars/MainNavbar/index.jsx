
import { Link } from "react-router-dom";
// import {darklogo} from '../../../../public/img/logo-dark.png';
// import lightlogo from '../../../../public/img/logo-light.png';
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai';
// import {FiMenu} from 'react-icons/fi'

const Navbar = ({ navbarRef, theme, logoTheme }) => {
  // const dropdownHover = (e) => {
  //   const dropdownItem = e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
  //   const dropdownMenu = dropdownItem.querySelector('.dropdown-menu');
  //   if (dropdownMenu) dropdownMenu.classList.add('show');
  // }

  // const dropdownLeave = () => {
  //   const openedDropdown = document.querySelector('.navbar .dropdown-menu.show');
  //   if (openedDropdown) openedDropdown.classList.remove('show');
  // }

  // const sideDropdownHover = (e) => {
  //   const dropdownItem = e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
  //   const dropdownSide = dropdownItem.querySelector('.dropdown-side');
  //   if (dropdownSide) dropdownSide.classList.add('show');
  // }

  // const sideDropdownLeave = () => {
  //   const openedSideDropdown = document.querySelector('.navbar .dropdown-side.show');
  //   if (openedSideDropdown) openedSideDropdown.classList.remove('show');
  // }

  return (
    <nav className={`navbar navbar-expand-lg ${theme}`} ref={navbarRef}>
      <div className="container">
        <Link to="/">
          <div className="logo">
            {logoTheme === 'dark' && <img src = '/img/logo-dark.png' alt="Logo"/>}
            {logoTheme === 'light' && <img src='/img/logo-light.png' alt="Logo" />}
            {!logoTheme && <img src='/img/logo-light.png' alt="Logo" />}
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Products" className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/Affiliates" className="nav-link">Affiliates</Link>
            </li>
            <li className="nav-item">
              <Link to="/Services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/Blog" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link">Contact</Link>
            </li>
          </ul>
          <div className="social">
            <ul className="rest">
              <li>
                <a href="https://www.facebook.com/Grandco-101187061352022/?modal=admin_todo_tour" target='_blank' rel="noreferrer noopener"><BiLogoFacebook style={{fontSize:'18px'}}/></a>
                <a href="https://twitter.com/Grandco5" rel="noreferrer noopener" target='_blank'><AiOutlineTwitter style={{fontSize:'18px'}}/></a>
                <a href="https://www.instagram.com/grandco_1/" rel="noreferrer noopener" target='_blank'><AiOutlineInstagram style={{fontSize:'18px'}}/></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
     </nav>
  )
}

export default Navbar;