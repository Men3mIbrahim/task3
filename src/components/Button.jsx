import { Link } from "react-router-dom";

function Button({ text, href = "#" }) {
  const isInternalRoute = href.startsWith("/");

  if (isInternalRoute) {
    return (
      <Link className="primary-button" to={href}>
        {text}
        <span aria-hidden="true">→</span>
      </Link>
    );
  }

  return (
    <a className="primary-button" href={href}>
      {text}
      <span aria-hidden="true">→</span>
    </a>
  );
}

export default Button;
