import * as React from "react"
import "../style/bulmacustom.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout.js"


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
          <div className="content" dangerouslySetInnerHTML={{ __html: data.project.html }}></div>

      </section>
    </Layout>
  );
}

export default IndexPage

export const Head = () => <title>Home Page</title>
