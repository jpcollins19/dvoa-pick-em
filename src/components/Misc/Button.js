import "./Misc.css";

const Button = ({ form, text, disabled, onClick }) => {
  return (
    <div className="button-cont">
      <button
        form={form ? form : ""}
        type={form ? "submit" : ""}
        disabled={disabled ? disabled : ""}
        className="button"
        onClick={onClick && onClick}
      >
        {text && text}
      </button>
    </div>
  );
};

export default Button;
