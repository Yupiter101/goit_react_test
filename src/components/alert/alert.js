// npm install sass

// библиотека для классов:
// npm install clsx
// import clsx from "clsx";

// npm install classnames

// className={clsx(
//   "alert",
//   variant,
//   outlined && "is-outlined",
//   elevated && "is-elevated"
// )}

// className = clsx("alert", outlined && "is-outlined");
// className = clsx("alert", {is-outlined: outlined}); ?????

const alertStyles = {
  padding: "12px 16px",
  borderRadius: 4,
  color: "white",
  width: 500,
};

const getBgColor = (variant) => {
  switch (variant) {
    case "info":
      return "blue";
    case "success":
      return "green";
    case "error":
      return "red";
    case "warning":
      return "orange";
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

export const Alert = ({ variant, children }) => {
  return (
    <p style={{ ...alertStyles, backgroundColor: getBgColor(variant) }}>
      {children}
    </p>
  );
};