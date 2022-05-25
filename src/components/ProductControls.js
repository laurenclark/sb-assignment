import React from "react";
import styled from "styled-components";
import ProductPagination from "./ProductPagination";

const ProductControlBar = styled.section`
    border-top: 1px solid #888;
    border-bottom: 1px solid #888;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    position: relative;
    div:first-of-type {
        border-left: 1px solid #888;
    }
    div {
        text-align: center;
        width: 200px;
        padding: 20px;
        border-right: 1px solid #888;
    }
`;

export default function ProductControls() {
    return (
        <ProductControlBar>
            <div>Model View</div>
            <div>Product View</div>
            <ProductPagination />
        </ProductControlBar>
    );
}
