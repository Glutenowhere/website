import React, {useEffect} from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout"
import ContactForm from "../components/contactForm";



const Engage = () => {
    const data = useStaticQuery(graphql`
      {
        markdownRemark(fields: { category: { eq: "engage" } }) {
          id
          html
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
        image: file(absolutePath: { regex: "/images/talk/" }) {
          id
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        infopdf: file(
          absolutePath: { regex: "/engage/.*Information.*/" }
          extension: { eq: "pdf" }
        ) {
          id
          publicURL
        }
        consentpdf: file(
            absolutePath: { regex: "/engage/.*consent.*/" }
            extension: { eq: "pdf" }
            ) {
            id
            publicURL
            }
      }
    `); 

    useEffect(() => console.log(data.markdownRemark.frontmatter.title), [data]);

    // Split tile by line break
    const titles = data.markdownRemark.frontmatter.title.split("\n");
                          
    return (
      <Layout name="Engage" image={data.image.childImageSharp.gatsbyImageData}>
        <section className="section">
          <div className="columns">
            <div className="column is-one-third">
              <GatsbyImage
                alt="Image about participating in the project"
                image={
                  data.markdownRemark.frontmatter.image.childImageSharp
                    .gatsbyImageData
                }
              />
            </div>
            <div className="column is-two-thirds">
              {titles.map((title) => (
                <h1 className="title">{title}</h1>
              ))}
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              ></div>
              <div className="buttons">
                <a
                  href={data.infopdf.publicURL}
                  target="_blank"
                  rel="noreferrer"
                  className="button is-primary is-size-5"
                >
                  Information sheet
                </a>
                <a
                  href={data.consentpdf.publicURL}
                  target="_blank"
                  rel="noreferrer"
                  className="button is-primary is-size-5"
                >
                  Consent form
                </a>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="section">
          <ContactForm />
        </section>
      </Layout>
    );
}

export default Engage