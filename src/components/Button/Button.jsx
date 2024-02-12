import "./Button.css";

export default function Button({ title, onClick }) {
  return (
    <button ClassName="button active" onClick={onClick}>
      {title}
    </button>
  );
}
