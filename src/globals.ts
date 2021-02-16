import { createGlobalStyle } from "styled-components";

import { white, blueDark, grayThree } from "./shared/Colors/colors";

export default createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        width: 100%;
        height: 100vh;

        color: ${white};
        background-color: ${blueDark};
        font-family: 'Mukta', sans-serif;
    }

    button {
        border: none;

        &:focus {
        outline: none;
    }
    }

    li {
        list-style: none;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }

    p {
        font-size: 16px;
        color: ${grayThree};
        letter-spacing: 1px;
        line-height: 140%;
        text-align: justify;
    }

    img, svg {
        width: 100%;
    }
`;
