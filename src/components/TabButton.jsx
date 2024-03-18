export default function TabButton({ children, onSelect, isSelected }) {
  console.log("TABBUTTON COMPONENT EXECUTING");
  return (
    <li>
      <button onClick={onSelect} className={isSelected ? "active" : ""}>
        {children}
      </button>
    </li>
  );
}
