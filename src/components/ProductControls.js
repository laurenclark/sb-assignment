import React from "react";
import styled from "styled-components";
import ProductPagination from "./ProductPagination";

const ProductControlBar = styled.section`
    border-top: 1px solid #888;
    border-bottom: 1px solid #888;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    div {
        width: 100px;
        padding: 20px;
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
