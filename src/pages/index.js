import * as React from "react"
import "../style/bulmacustom.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout.js";
import InfoCard from "../components/infoCard";


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
      <section className="section">
        <h1 className="title">{data.project.frontmatter.title}</h1>
        <div className="columns is-centered is-multiline">
          {data.project.frontmatter.cards.map((card) => (
            <div className="column is-one-third flex-grow-1">
              <InfoCard key={card} body={<p className="title">{card}</p>} />
            </div>
          ))}
        </div>
        <div className="column is-two-thirds">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data.project.html }}
          ></div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage

export const Head = () => <title>Home Page</title>
