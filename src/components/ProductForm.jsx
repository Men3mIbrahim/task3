import { useState } from "react";

const initialForm = {
  title: "",
  category: "",
  price: "",
  description: "",
  image: ""
};

function ProductForm({ onAddProduct }) {
  const [form, setForm] = useState(initialForm);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const product = {
      ...form,
      id: Date.now(),
      price: Number(form.price)
    };

    onAddProduct(product);
    setForm(initialForm);
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <div>
          <p className="eyebrow">PRODUCT MANAGEMENT</p>
          <h2>Add New Product</h2>
        </div>
        <p>Create a product and it will be saved in your browser automatically.</p>
      </div>

      <div className="form-grid">
        <label>
          Product Name
          <input
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g. Gaming Mouse"
            required
          />
        </label>

        <label>
          Category
          <input
            name="category"
            type="text"
            value={form.category}
            onChange={handleChange}
            placeholder="e.g. Gaming"
            required
          />
        </label>

        <label>
          Price
          <input
            name="price"
            type="number"
            min="0"
            step="0.01"
            value={form.price}
            onChange={handleChange}
            placeholder="99"
            required
          />
        </label>

        <label>
          Image URL
          <input
            name="image"
            type="url"
            value={form.image}
            onChange={handleChange}
            placeholder="https://..."
            required
          />
        </label>

        <label className="full-width">
          Description
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Write a short product description..."
            rows="3"
            required
          />
        </label>
      </div>

      <button className="primary-button form-submit" type="submit">
        Add Product <span aria-hidden="true">+</span>
      </button>
    </form>
  );
}

export default ProductForm;
