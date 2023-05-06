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
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 400)
              }
            }
          }
        }
      }
    `);

  return (
    <Layout>
      <section className="section">
        
          <h1 className="title">{data.project.frontmatter.title}</h1>
          <div className="columns">
            <div className="column is-one-third">
          <InfoCard body={<p className="title has-background-primary has-text-white">"This website is intended to help share lived experiences of coeliac disease. It also wants to help make research data on coeliac disease more accessible."</p>}/>
          </div>
          <div className="column is-two-thirds">
          <div className="content" dangerouslySetInnerHTML={{ __html: data.project.html }}></div>
          </div>
          </div>

      </section>
    </Layout>
  );
}

export default IndexPage

export const Head = () => <title>Home Page</title>
