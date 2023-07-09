import * as React from "react"
import "../style/bulmacustom.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout.js";

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

  return (
    <>
      <Layout name="landing">
        <section className="section is-flex is-flex-direction-column is-justify-content-space-around">
          <div className="columns is-flex is-multiline">
            <div className="column is-half is-full-mobile is-flex is-align-content-center">
              <h1 className="title">{data.project.frontmatter.title}</h1>
            </div>
            <div className="column is-half is-full-mobile">
              <div className="box has-background-primary is-fullheight is-flex is-flex-direction-column is-justify-content-center p-6">
                {data.project.frontmatter.cards.map((card) => (
                  <p className="title has-text-left has-text-light">{card}</p>
                ))}

                <div className="border pt-6">
                  <p className="title has-text-centered has-text-light">
                    Follow me ...
                  </p>
                  <p className="has-text-centered has-text-light">
                    ... for gluten-free food, travel and work tips!
                  </p>
                  <p className="is-flex is-flex-direction-row is-justify-content-center">
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
                  </p>
                </div>
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
