import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className="primary-button" to="/">Back Home →</Link>
    </section>
  );
}

export default NotFound;
