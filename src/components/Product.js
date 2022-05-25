import React from "react";
import styled from "styled-components";

const ProductItem = styled.li`
    width: 40%;
    padding: 20px;
    @media (min-width: 768px) {
        width: 30%;
        padding: 1%;
    }
`;

const ProductImage = styled.img`
    display: block;
    max-width: 100%;
    width: 300px;
    margin: 0 auto;
    height: 500px;
    object-fit: contain;
`;

const ProductDescription = styled.div`
    margin-top: 20px;
    line-height: 1.2;

    h4,
    p {
        margin-bottom: 15px;
    }
    p:last-of-type {
        text-transform: capitalize;
    }
`;

export default function Product({ id, title, description, image, category }) {
    return (
        <ProductItem key={id}>
            <ProductImage src={image} alt={description} />
            <ProductDescription>
                <h4>
                    <strong>{title}</strong>
                </h4>
                <p>{description}</p>
                <p>{category}</p>
            </ProductDescription>
        </ProductItem>
    );
}
