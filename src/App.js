import useFetch from "./hooks/useFetch";

import styled from "styled-components";
import { css } from "styled-components/macro";

import Header from "./components/Header";
import ProductPage from "./layouts/ProductPage";
import ProductControls from "./components/ProductControls";
import Product from "./components/Product";
import { ThreeDots } from "react-loading-icons";

export default function App() {
    const productsUrl = "https://fakestoreapi.com/products";
    const limit = "20";
    const { response, error, isLoading } = useFetch(
        `${productsUrl}?limit=${limit}`
    );

    const ErrorMessage = styled.div`
        color: tomato;
        font-weight: bold;
        text-align: center;
        display: grid;
        place-items: center;
        height: 40vh;
    `;

    const Loader = styled.div`
        height: 35vh;
        display: grid;
        place-items: center;
        h3 {
            color: grey;
            font-size: 40px;
        }
    `;

    return (
        <ProductPage>
            <Header />
            <ProductControls
                resultsPerPage={limit}
                maxResults={String(response?.length)}
            />
            <main>
                {error && (
                    <ErrorMessage>
                        Sorry, something went wrong. Please refresh the page and
                        try again.
                    </ErrorMessage>
                )}
                {isLoading && (
                    <Loader>
                        <ThreeDots
                            fill="#666"
                            fillOpacity={1}
                            height="4em"
                            speed={1}
                            stroke="transparent"
                            strokeOpacity={1}
                            style={{
                                margin: "0 auto"
                            }}
                        />
                        <h3>Loading...</h3>
                    </Loader>
                )}
                <ul>
                    {!error &&
                        response?.map(
                            ({ id, title, description, image, category }) => (
                                <Product
                                    key={id}
                                    title={title}
                                    description={description}
                                    image={image}
                                    category={category}
                                />
                            )
                        )}
                </ul>
            </main>
            <span
                css={css`
                    margin: 20px;
                    display: block;
                    text-align: center;
                    color: grey;
                    font-size: 30px;
                `}>
                <a href="https://github.com/laurenclark/sb-assignment">Repo</a>
            </span>
        </ProductPage>
    );
}
