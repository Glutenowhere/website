import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const InfoCard = ({body,image,footer,fullheight}) => {
    const imageContent = image ? (
        <div className="card-image">
            <figure className="image">
                <GatsbyImage
                    className="image"
                    alt="Image of Anne Steinhoff"
                    image={image}
                />
            </figure>
        </div>
    ) : undefined;
    const bodyContent = <div className="card-content">{body}</div>;
    const footerContent = footer ? <footer className="card-footer">
                            <p className="card-footer-item">                           
                                    {footer}
                            </p>
                            </footer> : undefined;
    return (
      <div className={`card ${fullheight ? "is-fullheight" : undefined}`}>
        {imageContent}
        {bodyContent}
        {footerContent}
      </div>
    );
}

export default InfoCard