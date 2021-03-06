import { css } from "styled-components/macro";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const PaginationStyles = css`
    position: absolute;
    top: 80px;
    span:first-of-type {
        margin-right: 50px;
    }
    @media (min-width: 768px) {
        right: 40px;
        top: 17px;
    }
`;

const ArrowStyles = css`
    top: 2px;
    position: relative;
    cursor: pointer;
`;

export default function ProductPagination({
    currentPage = 1,
    resultsPerPage = 34,
    maxResults = 300,
    totalPages = 11
}) {
    return (
        <span css={PaginationStyles}>
            <span>
                {currentPage} - {resultsPerPage} of {maxResults}
            </span>
            <span>
                <IoMdArrowDropleft css={ArrowStyles} />
                {currentPage} / {totalPages}
                <IoMdArrowDropright css={ArrowStyles} />
            </span>
        </span>
    );
}
