import { useEffect, useState } from "react";
import { Link } from "react-router";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        const slicedTrendingProducts = res.products.slice(1, 10);
        setTrendingProducts(slicedTrendingProducts);
      });
  }, []);

  return (
    <div>
      <h2>Home Page</h2>

      <h3>Trending Products 🔥</h3>

      <div className="product-grid">
        {trendingProducts.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
              </Link>
            </div>
          );
        })}
      </div>

      <Link to="/products">
        <button style={{ width: "100px", padding: "10" }}>
          View all products
        </button>
      </Link>
    </div>
  );
};

export default Home;
