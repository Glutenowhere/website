import * as React from "react"
import "../style/bulmacustom.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout.js";
import InfoCard from "../components/infoCard";
import PatternBackground from "../components/patternBackground";

const instagram = {
  iconName: "fa-instagram",
  link: "https://www.instagram.com/glutenout23/",
};

const IndexPage = () => {
    const data = useStaticQuery(graphql`
      {
        project: markdownRemark(
          fields: { category: { eq: "landing" } }
          fileAbsolutePath: { regex: "/project.md/" }
        ) {
          html
          frontmatter {
            title
            cards
          }
        }
      }
    `);

  return (
    <Layout name="landing">

        <section className="section is-flex is-flex-direction-column is-justify-content-space-between">
          <div className="columns is-flex-grow-1">
            <div className="column is-two-thirds">
              <h1 className="title">{data.project.frontmatter.title}</h1>
            </div>
            <div className="column is-one-third">
              {data.project.frontmatter.cards.map((card) => (
                <div className="columns">
                  <div className="column is-full">
                    <InfoCard
                      key={card}
                      body={<p className="title">{card}</p>}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="columns">
            <div className="column has-text-centered">
              <p className="title">
                <a
                  key={instagram.iconName}
                  href={instagram.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="icon is-large">
                    <i className={`fab ${instagram.iconName}`}></i>
                  </span>
                  Follow me on Instagram!
                </a>
              </p>
            </div>
          </div>

          <div className="columns is-centered">
            <div className="column is-two-thirds">
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: data.project.html }}
              ></div>
            </div>
          </div>
        </section>

    </Layout>
  );
}

export default IndexPage

export const Head = () => <title>Home Page</title>
