import { useState } from "react";

function ProductCard({ product, onDelete }) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="product-card">
      <div className="product-image">
        {imageError ? (
          <div className="image-fallback">No Image</div>
        ) : (
          <img src={product.image} alt={product.title} onError={() => setImageError(true)} />
        )}
        <span className="category">{product.category}</span>
      </div>

      <div className="product-info">
        <div className="product-title-row">
          <h3>{product.title}</h3>
          <button
            className="delete-button"
            type="button"
            onClick={() => onDelete(product.id)}
            aria-label={`Delete ${product.title}`}
            title="Delete product"
          >
            🗑
          </button>
        </div>

        <p>{product.description}</p>

        <div className="product-bottom">
          <strong>${product.price}</strong>
          <span className="details-label">Product</span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
