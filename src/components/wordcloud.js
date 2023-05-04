import React from "react";


const WordCloud = ({ words, title }) => {

    return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        className="background-pattern"
    >
        <defs>
        <pattern
            id="cat-pattern"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
        >
            <text
            x="0"
            y="20"
            fill="black"
            fontWeight= "bold"
            fillOpacity={0.1}
            className="pattern-text"
            transform="rotate(-45)"
            >
            
            </text>
        </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#cat-pattern)" />
    </svg>
);
    
}

export default WordCloud;