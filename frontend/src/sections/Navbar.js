import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {
  const [isClicked, setisClicked] = React.useState(false)
  const [navScrolled, setnavScrolled] = React.useState(false)

  const handleClick = () => {
    setisClicked(!isClicked)
  }

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight - 100) {
      setnavScrolled(true)
    } else {
      setnavScrolled(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={navScrolled ? "navbar is-fixed-top is-scrolled" : "navbar is-fixed-top"} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="home" smooth={true} duration={1000}>
          <img src={require('../images/SK-logo (design 3).png')} className="brand-logo" >
          </img>
        </Link>
        <a role="button" className={isClicked ? "navbar-burger burger is-active" : "navbar-burger burger"} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={handleClick}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={isClicked ? "navbar-menu is-active" : "navbar-menu"}>
        <div className="navbar-end">
          <Link className="navbar-item" to="about" smooth={true} duration={1000}>
            About
          </Link>
          <Link className="navbar-item" to="projects" smooth={true} duration={1000}>
            Projects
          </Link>
          <Link className="navbar-item" to="contactme" smooth={true} duration={1000}>
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
