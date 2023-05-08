import React, {useEffect} from 'react';
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

    useEffect(() => console.log(data), [data]);

    const svg = (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="star"
            viewBox="0, 0 ,20,20"
            width="20%"
            height="20%"
            patternContentUnits="objectBoundingBox"
          >
            <image
              xlinkHref={data.file.publicURL}
              preserveAspectRatio="xMidYMid slice"
              x="5"
              y="5"
              width="10"
              height="10"
            />
          </pattern>
        </defs>

        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#star)"
          opacity="0.1"
        />
      </svg>
    );
    return (
      <div className="pattern-background">
        {svg}
      </div>
    );
}

export default PatternBackground;