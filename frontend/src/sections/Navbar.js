import React from 'react'



function Navbar() {
  const [isClicked, setisClicked] = React.useState(false)

  const handleClick = () => {
    setisClicked(!isClicked)
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#home">
          <img src={require('../images/SK-logo(design 1).png')} className="brand-logo" >
          </img>
        </a>
        <a role="button" className={isClicked ? "navbar-burger burger is-active" : "navbar-burger burger"} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={handleClick}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={isClicked ? "navbar-menu is-active" : "navbar-menu"}>
        <div className="navbar-end">
          <a className="navbar-item" href="#about">
            About
          </a>
          <a className="navbar-item" href="#projects">
            Projects
          </a>
          <a className="navbar-item" href="#contactme">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
