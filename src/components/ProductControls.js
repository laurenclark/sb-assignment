import styled from "styled-components";
import ProductPagination from "./ProductPagination";

import PropTypes from "prop-types";

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
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
            background: #f1f1f1;
        }
    }
`;

export default function ProductControls({ resultsPerPage, maxResults }) {
    return (
        <ProductControlBar>
            <div>Model View</div>
            <div>Product View</div>
            <ProductPagination
                resultsPerPage={resultsPerPage}
                maxResults={maxResults}
            />
        </ProductControlBar>
    );
}

ProductControls.propTypes = {
    resultsPerPage: PropTypes.string,
    maxResults: PropTypes.string
};
