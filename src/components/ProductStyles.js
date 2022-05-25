import styled from "styled-components";

export const ProductItem = styled.li`
    width: 35%;
    padding: 15px;
    @media (min-width: 500px) {
        width: 42%;
        padding: 20px;
    }
    @media (min-width: 768px) {
        width: 31%;
        padding: 1%;
    }
`;

export const ProductImage = styled.img`
    display: block;
    max-width: 100%;
    margin: 0 auto;
    object-fit: contain;
    height: 350px;
    width: 200px;
    @media (min-width: 768px) {
        height: 500px;
        width: 300px;
    }
`;

export const ProductDescription = styled.div`
    margin-top: 20px;
    line-height: 1.2;
    min-height: 130px;
    h4,
    p {
        margin-bottom: 15px;
    }
    p:last-of-type {
        text-transform: capitalize;
    }
    h4 {
        display: block;
        padding-right: 40px;
        position: relative;
    }
`;
