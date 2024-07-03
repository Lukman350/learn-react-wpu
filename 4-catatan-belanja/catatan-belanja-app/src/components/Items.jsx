export default function Items({ item, onItemChecked, onItemDeleted }) {
  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={item.checked}
        onChange={() => onItemChecked(item.id)}
      />
      <span style={item.checked ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.name}
      </span>
      <button onClick={() => onItemDeleted(item.id)}>&times;</button>
    </li>
  );
}
