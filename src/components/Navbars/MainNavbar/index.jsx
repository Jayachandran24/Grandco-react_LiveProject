/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Navbar = ({ navbarRef, theme, logoTheme }) => {
  const dropdownHover = (e) => {
    const dropdownItem = e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
    const dropdownMenu = dropdownItem.querySelector('.dropdown-menu');
    if (dropdownMenu) dropdownMenu.classList.add('show');
  }

  const dropdownLeave = () => {
    const openedDropdown = document.querySelector('.navbar .dropdown-menu.show');
    if (openedDropdown) openedDropdown.classList.remove('show');
  }

  const sideDropdownHover = (e) => {
    const dropdownItem = e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
    const dropdownSide = dropdownItem.querySelector('.dropdown-side');
    if (dropdownSide) dropdownSide.classList.add('show');
  }

  const sideDropdownLeave = () => {
    const openedSideDropdown = document.querySelector('.navbar .dropdown-side.show');
    if (openedSideDropdown) openedSideDropdown.classList.remove('show');
  }

  return (
    <nav className={`navbar navbar-expand-lg ${theme}`} ref={navbarRef}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          <div className="logo">  
            {logoTheme === 'dark' && <img src="img/logo-dark.png" alt="Logo"/>}
            {logoTheme === 'light' && <img src="img/logo-light.png" alt="Logo" />}
            {!logoTheme && <img src="img/logo-light.png" alt="Logo" />}
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
              <Link href="/"><a className="nav-link">Home</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/products"><a className="nav-link">Products</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/coming-soon"><a className="nav-link">Affiliates</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/services"><a className="nav-link">Services</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/blog"><a className="nav-link">Blog</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/contact"><a className="nav-link">Contact</a></Link>
            </li>
          </ul>
          <div className="social">
            <ul className="rest">
              <li>
                <a href="https://www.facebook.com/Grandco-101187061352022/?modal=admin_todo_tour" target='_blank' rel="noreferrer noopener"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/Grandco5" rel="noreferrer noopener" target='_blank'><i className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/grandco_1/" rel="noreferrer noopener" target='_blank'><i className="fab fa-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;