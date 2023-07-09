import React, {useState} from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const navItems = [
    {name: "About", link: "/about"},
    {name: "Blog", link: "/blog"},
    {name: "Engage", link: "/engage"},
    {name: "Research Corner", link: "/research-corner"},
]

const Layout = (props) => {

    const data = useStaticQuery(graphql`
      {
        logo: file(absolutePath: { regex: "/logo.png/" }) {
          id
          childImageSharp {
            gatsbyImageData(layout: FIXED, height: 56)
          }
        }
        hero: file(absolutePath: { regex: "/images/wordcloud/" }) {
          id
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        socialMedia: allMarkdownRemark(
          filter: { fields: { category: { eq: "socialmedia" } } }
        ) {
          nodes {
            id
            frontmatter {
              name
              link
              iconName
            }
          }
        }
      }
    `);

    const [showMobileMenu,setShowMobileMenu] = useState(false);

    const navBarBrand = (
      <div className="navbar-brand">
        <Link to="/">
          <GatsbyImage
            alt="Logo of the project"
            image={data.logo.childImageSharp.gatsbyImageData}
          />
        </Link>
        <a
          role="button"
          className={`navbar-burger ${
            showMobileMenu ? "is-active" : undefined
          }`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    );

    const navBarLeft = (
        <div className="navbar-start">
            {navItems.map((item) => (
              <Link className={`navbar-item ${item.name===props.name ? "is-active" : undefined}`} to={item.link} key={item.name}>
                {item.name}
              </Link>
            ))}
        </div>
    );

    const navBarRight = (
      <div className={`navbar-end`}>
        {data.socialMedia.nodes.map((item) => (
          <a
            className="navbar-item"
            key={item.id}
            href={item.frontmatter.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="icon is-large">
              <i className={`fab ${item.frontmatter.iconName}`}></i>
            </span>
          </a>
        ))}
      </div>
    );

    return (
      <div
        className={`full-size ${
          props.name === "landing" ? "is-landing" : undefined
        }`}
      >
        <nav
          className="navbar is-primary"
          role="navigation"
          aria-label="main navigation"
        >
          {navBarBrand}
          <div
            className={`navbar-menu ${
              showMobileMenu ? "is-active" : undefined
            }`}
          >
            {navBarLeft}
            {navBarRight}
          </div>
        </nav>
        <main
          className={`container flex-grow ${
            props.name === "landing" ? "is-flex" : undefined
          }`}
        >
          {props.children}
        </main>
      </div>
    );
}

export default Layout