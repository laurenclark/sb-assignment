import React from "react";
import { css } from "styled-components/macro";

const $styles = css`
    font-family: "Josefin Sans", sans-serif;
`;
export default function ProductPage({ children }) {
    return <div css={$styles}>{children}</div>;
}
