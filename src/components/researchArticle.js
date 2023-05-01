import React from "react";

const ResearchArticle = ({ article }) => {
    return (
        <div className="box">
        <h2 className="title is-4">{article.frontmatter.title}</h2>
        <h3 className="subtitle is-6">
            {article.frontmatter.author} ({article.frontmatter.year}) in {article.frontmatter.in}
        </h3>
        <div dangerouslySetInnerHTML={{ __html: article.html }}></div>
        </div>
    );
    }

export default ResearchArticle;