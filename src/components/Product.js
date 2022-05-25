import React from "react";
import styled from "styled-components";
import { IoIosHeartEmpty } from "react-icons/io";

const ProductItem = styled.li`
    width: 42%;
    padding: 20px;
    @media (min-width: 768px) {
        width: 31%;
        padding: 1%;
    }
`;

const ProductImage = styled.img`
    display: block;
    max-width: 100%;
    margin: 0 auto;
    object-fit: contain;
    height: 300px;
    width: 150px;
    @media (min-width: 768px) {
        height: 500px;
        width: 300px;
    }
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
    h4 {
        display: block;
        padding-right: 60px;
        position: relative;
        span {
            position: absolute;
            right: 0;
            top: 0;
            font-size: 20px;
        }
    }
`;

export default function Product({ title, description, image, category }) {
    return (
        <ProductItem>
            <ProductImage src={image} alt={description} />
            <ProductDescription>
                <h4>
                    <strong>{title}</strong>
                    <span>
                        <IoIosHeartEmpty />
                    </span>
                </h4>
                <p>{description}</p>
                <p>{category}</p>
            </ProductDescription>
        </ProductItem>
    );
}
