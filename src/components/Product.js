import React from "react";
import styled from "styled-components";

const ProductItem = styled.li`
    width: 40%;
    padding: 3%;
    @media (min-width: 768px) {
        width: 25%;
        padding: 3%;
    }
`;

const ProductImage = styled.img`
    display: block;
    max-width: 100%;
    margin: 0 auto;
    height: 450px;
    object-fit: contain;
`;

const ProductDescription = styled.div`
    margin-top: 20px;
    line-height: 1.2;
    p:last-of-type {
        text-transform: capitalize;
    }
`;

export default function Product({ id, title, description, image, category }) {
    return (
        <ProductItem key={id}>
            <ProductImage src={image} alt={description} />
            <ProductDescription>
                <span>
                    <strong>{title}</strong>
                </span>
                <p>{description}</p>
                <p>{category}</p>
            </ProductDescription>
        </ProductItem>
    );
}
