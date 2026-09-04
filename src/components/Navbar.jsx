import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <NavLink className="brand" to="/" aria-label="NovaStore home">
        <span className="brand-mark">N</span>
        <span>NovaStore</span>
      </NavLink>

      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <NavLink className="cart-link" to="/products" aria-label="View products">
        <span>🛒</span>
        <span>Shop</span>
      </NavLink>
    </header>
  );
}

export default Navbar;
