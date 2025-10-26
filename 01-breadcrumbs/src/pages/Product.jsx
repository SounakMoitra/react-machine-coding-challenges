import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, []);

  return (
    <div>
      <h2>Product details Page</h2>

      <div>
        {product ? (
          <div>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <h3>$ {product.price}</h3>
            <h3>{product.rating} ⭐</h3>
            <h4>Current Stock: {product.stock}</h4>
            <p>{product.description}</p>

            <div>
              <h4>Reviews:-</h4>
              <div>
                {product.reviews.map((review) => {
                  return (
                    <div
                      style={{ border: "solid white 1px" }}
                      key={review.reviewerEmail}
                    >
                      <h5>{review.reviewerName}</h5>
                      <h6>
                        {new Date(review.date).toLocaleDateString("en-US", {
                          month: "2-digit",
                          day: "2-digit",
                          year: "numeric",
                        })}
                      </h6>
                      <p>{review.comment}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <p>loading....</p>
        )}
      </div>
    </div>
  );
};

export default Product;
