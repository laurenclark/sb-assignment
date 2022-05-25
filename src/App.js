import useFetch from "./hooks/useFetch";
import Header from "./components/Header";
import ProductPage from "./layouts/ProductPage";
import ProductControls from "./components/ProductControls";

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
                {response &&
                    response.map(
                        ({ id, title, description, image, category }) => (
                            <ul key={id}>
                                <li>
                                    <img src={image} alt={description} />
                                </li>
                                <li>{title}</li>
                                <li>{description}</li>
                                <li>{category}</li>
                            </ul>
                        )
                    )}
            </main>
        </ProductPage>
    );
}

export default App;
