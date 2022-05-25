import useFetch from "./hooks/useFetch";
import Header from "./components/Header";
import ProductPage from "./layouts/ProductPage";
import ProductControls from "./components/ProductControls";
import Product from "./components/Product";

function App() {
    const url = "https://fakestoreapi.com/products";
    const { response, error, isLoading } = useFetch(url);

    return (
        <ProductPage>
            <Header />
            <ProductControls />
            <main>
                {error && "error"}
                {isLoading && "Loading..."}
                <ul>
                    {response?.map(
                        ({ id, title, description, image, category }) => (
                            <Product
                                id={id}
                                title={title}
                                description={description}
                                image={image}
                                category={category}
                            />
                        )
                    )}
                </ul>
            </main>
        </ProductPage>
    );
}

export default App;
