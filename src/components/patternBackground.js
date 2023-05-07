import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const svg = <svg></svg>

const PatternBackground = () => {
    const data = useStaticQuery(graphql`
    {
        file(absolutePath: {regex: "/crop.png/"}) {
            id
            publicURL
        }
    }`);

    const svg = (
      <svg width="500" height="500">
        <defs>
          <pattern id="image-pattern" x="0" y="0" width="1" height="1">
            <image xlinkHref={data.publicURL} width="100%" height="100%" />
          </pattern>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#image-pattern)"
        />
      </svg>
    );
    return (<>{svg}</>);
}

export default PatternBackground;