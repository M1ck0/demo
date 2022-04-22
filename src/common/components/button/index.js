import "./button.css";

const Button = ({ type = "primary", title, ...props }) => {
  /*
   * Types:
   * - primary
   * - dark
   * - ghost-blue
   * - ghost-black
   */

  return (
    <button className={"button button-" + type} {...props}>
      {title}
    </button>
  );
};

export default Button;
