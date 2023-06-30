import * as React from "react"
import "../style/bulmacustom.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout.js";
import InfoCard from "../components/infoCard";
import PatternBackgound from "../components/patternBackground";

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
    <>
      <Layout name="landing">
        <PatternBackgound />
        <section className="section is-flex is-flex-direction-column is-justify-content-space-around">
          {/* <div className="columns is-flex-grow-1 is-multiline">
            <div className="column is-full"> */}
          <h1 className="title">{data.project.frontmatter.title}</h1>
          {/* </div>
          </div> */}
          <div className="columns is-flex is-justify-content-center">
            {data.project.frontmatter.cards.map((card) => (
              <div className="column is-two-fifths">
                <div className="box is-fullheight p-6">
                  <p className="title has-text-left">{card}</p>
                  {/* <InfoCard
                    key={card}
                    body={}
                    fullheight={true}
                  /> */}
                </div>
              </div>
            ))}
          </div>

          <div className="columns is-flex is-justify-content-center">
            <div className="column has-text-centered is-four-fifths">
              <div className="box">
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
                    Follow me on Instagram for gluten-free food, travel and work
                    tips!
                  </a>
                </p>
              </div>
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
    </>
  );
}

export default IndexPage

export const Head = () => <title>Home Page</title>
