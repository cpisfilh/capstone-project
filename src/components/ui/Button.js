import "../../styles/ui/Button.css";

export function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="ui__button">
      {children}
    </button>
  );
}