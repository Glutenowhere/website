import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import InfoCard from "../components/infoCard";

const socialMediaItems = [
  {
    iconName: "fa-twitter",
    link: "https://twitter.com/ane_ste",
  },
  {
    iconName: "fa-linkedin",
    link: "https://www.linkedin.com/in/anne-steinhoff-04689661/",
  },
  {
    iconName: "fa-instagram",
    link: "https://www.instagram.com/glutenout23/",
  },
];

const About = () => {
    const data = useStaticQuery(graphql`
      {
        bio: markdownRemark(
          fields: { category: { eq: "about" } }
          fileAbsolutePath: { regex: "/bio.md/" }
        ) {
          html
          frontmatter {
            title
            cardTitle
            cardSubtitle
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 400, aspectRatio: 1)
                
              }
            }
          }
        }
      }
    `);
      const infoContent = (
        <>
          <p className="title">{data.bio.frontmatter.cardTitle}</p>
          <p className="subtitle">{data.bio.frontmatter.cardSubtitle}</p>
        </>
      );
      const footer = (
        <>
          {socialMediaItems.map((item) => (
          <a
            className="navbar-item"
            key={item.iconName}
            href={item.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="icon is-large">
              <i className={`fab ${item.iconName}`}></i>
            </span>
          </a>
          ))}
        </>
      );
  return (
    <Layout name="About">
      <section className="section">
        <div className="columns">
          <div className="column is-one-third">
            <InfoCard
              image={data.bio.frontmatter.image.childImageSharp.gatsbyImageData}
              body={infoContent}
              footer={footer}
            />
          </div>
          <div className="column is-two-thirds">
            <h1 className="title">{data.bio.frontmatter.title}</h1>
            <div
              className="content has-text-justified"
              dangerouslySetInnerHTML={{ __html: data.bio.html }}
            ></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
