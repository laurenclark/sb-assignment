import React from "react";

export default function ProductPagination({
    currentPage = 1,
    resultsPerPage = 34,
    maxResults = 300,
    totalPages = 11
}) {
    return (
        <div>
            <span>
                {currentPage} - {resultsPerPage} of {maxResults}
            </span>
            <span>
                {currentPage} / {totalPages}
            </span>
        </div>
    );
}
