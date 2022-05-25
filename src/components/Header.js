import React from "react";
import { css } from "styled-components/macro";

function Header() {
    const HeaderStyles = css`
        margin-top: 20px;
        h1,
        h3 {
            font-weight: 300;
            text-align: center;
            max-width: 850px;
            padding: 5px 40px;
            margin: 0 auto;
            line-height: 1.4;
        }
        h1 {
            font-size: 20px;
            text-transform: uppercase;
        }
    `;
    return (
        <header css={HeaderStyles}>
            <h1>All Clothing</h1>
            <h3>
                Discover Sweaty Betty's range of beautiful, technical
                bum-sculpting leggings, yoga pants, jumpers sports bras & more.
                Shop Sweaty betty now!
            </h3>
        </header>
    );
}

export default Header;
