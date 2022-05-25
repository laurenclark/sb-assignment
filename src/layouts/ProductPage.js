import React from "react";
import styled from "styled-components";
import { css } from "styled-components/macro";

const $styles = css`
    font-family: "Josefin Sans", sans-serif;
    strong {
        font-weight: 600;
    }
    p {
        line-height: 1.2;
    }
    ul {
        max-width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        list-style: none;
    }
`;
export default function ProductPage({ children }) {
    return <div css={$styles}>{children}</div>;
}
