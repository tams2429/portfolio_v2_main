import React from 'react'



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
        <a className="navbar-item" href="#home">
          <img src={require('../images/SK-logo (design 3).png')} className="brand-logo" >
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
