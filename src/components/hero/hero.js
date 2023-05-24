import "./hero.css";
import PropTypes from "prop-types";

export function Hero({active, children}) {
  const classActive = 'hero is-active';
  const classNoActive = 'hero';
  // classActive = `hero ${active ? is-active' : ""}`;

  return (
    <div className={active ? classActive : classNoActive}>
      <h1>{children}</h1>
      <p>Description hero "class css"</p>
      <a href={"https://react-icons.github.io/react-icons/"} target={"blanc"}>https://react-icons</a>
    </div>
  );
}

Hero.propTypes = {
  active: PropTypes.bool,
}