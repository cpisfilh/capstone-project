import "../../styles/ui/Button.css";

export function Button({ children, onClick, type="button", disabled=false }) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className="ui__button">
      {children}
    </button>
  );
}