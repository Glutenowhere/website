import React, {useState} from "react"
import {Link} from "gatsby"

const navItems = [
    {name: "About", link: "/about"},
    {name: "Blog", link: "/blog"},
    {name: "Participate", link: "/participate"},
]

const socialMediaItems = [
  { 
    iconName: "fa-twitter", 
    link: "https://twitter.com/ane_ste" 
  },
  {
    iconName: "fa-linkedin",
    link: "https://www.linkedin.com/in/anne-steinhoff-04689661/",
  },
];



const navBarBottom = (
  <nav
    className="navbar is-hidden-touch"
    role="navigation"
    ariaLabel="main navigation"
  >
    <div className="navbar-brand"></div>
    <div className="navbar-menu is-flex is-justify-content-space-around">
      <div className="is-flex">
        {navItems.map((item) => (
          <Link className="navbar-item" to={item.link} key={item.name}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  </nav>
);

const Layout = (props) => {

    const [showMobileMenu,setShowMobileMenu] = useState(false);

    const navBarTop = (
      <nav className="navbar" role="navigation" ariaLabel="main navigation">
        <div className="navbar-brand">
          <Link to="./">
            <b>Logo</b>
          </Link>
          <a
            role="button"
            className={`navbar-burger ${showMobileMenu?"is-active":undefined}`}
            ariaLabel="menu"
            ariaExpanded="false"
            dataTarget="navbarBasicExample"
            onClick={()=>setShowMobileMenu(!showMobileMenu)}
          >
            <span ariaHidden="true"></span>
            <span ariaHidden="true"></span>
            <span ariaHidden="true"></span>
          </a>
        </div>
        <div className={`navbar-end ${!showMobileMenu?"is-hidden-touch":undefined}`}>
          {navItems.map((item) => (
            <Link
              className="navbar-item is-hidden-desktop"
              to={item.link}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
          {socialMediaItems.map((item) => (
            <a className="navbar-item" href={item.link} target="_blank" rel="noreferrer noopener">
              <span className="icon is-large">
                <i className={`fab ${item.iconName}`}></i>
              </span>
            </a>
          ))}
        </div>
      </nav>
    );

    return (
      <section className="hero is-medium is-primary">
        <div className="hero-head">
            {navBarTop}
        </div>
        <div className="hero-body">
          <p className="title is-size-1 has-text-centered">
            Coeliac Disease and the Workplace
          </p>
        </div>
        <div className="hero-footer">
            {navBarBottom}
        </div>
      </section>
    );
}

export default Layout