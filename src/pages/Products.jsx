import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";
import SectionTitle from "../components/SectionTitle";

const defaultProducts = [
  {
    id: 1,
    title: "Laptop Pro 14",
    category: "Computers",
    price: 900,
    description: "Powerful performance in a slim, portable design.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    title: "Studio Headphones",
    category: "Audio",
    price: 120,
    description: "Immersive sound with comfortable all-day listening.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    title: "Smart Watch X",
    category: "Accessories",
    price: 200,
    description: "Track your day and stay connected at a glance.",
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    title: "Mirrorless Camera",
    category: "Photography",
    price: 750,
    description: "Capture sharp, vibrant photos wherever you go.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    title: "Mechanical Keyboard",
    category: "Gaming",
    price: 95,
    description: "Responsive mechanical keys with a clean modern layout.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    title: "Smartphone Ultra",
    category: "Mobile",
    price: 680,
    description: "A bright display, fast processor, and premium camera.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80"
  }
];

function getSavedProducts() {
  try {
    const savedProducts = localStorage.getItem("novastore_products");
    return savedProducts ? JSON.parse(savedProducts) : defaultProducts;
  } catch {
    return defaultProducts;
  }
}

function Products() {
  const [products, setProducts] = useState(getSavedProducts);

  useEffect(() => {
    localStorage.setItem("novastore_products", JSON.stringify(products));
  }, [products]);

  function addProduct(product) {
    setProducts((currentProducts) => [product, ...currentProducts]);
  }

  function deleteProduct(productId) {
    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== productId)
    );
  }

  return (
    <div className="products-page">
      <section className="products-header">
        <SectionTitle
          title="Products"
          subtitle="Manage your product collection. Add new products or remove existing ones without reloading the page."
        />
      </section>

      <section className="product-management">
        <ProductForm onAddProduct={addProduct} />
      </section>

      <section className="products-section" id="products">
        <div className="products-count">
          <h2>All Products</h2>
          <span>{products.length} {products.length === 1 ? "product" : "products"}</span>
        </div>

        {products.length > 0 ? (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onDelete={deleteProduct}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No products yet</h3>
            <p>Use the form above to add your first product.</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Products;
