import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import InfoCard from "../components/infoCard";

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
      const infoContent = (
        <>
          <p className="title">{data.bio.frontmatter.cardTitle}</p>
          <p className="subtitle">{data.bio.frontmatter.cardSubtitle}</p>
        </>
      );
      const footer = (
        <>
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
