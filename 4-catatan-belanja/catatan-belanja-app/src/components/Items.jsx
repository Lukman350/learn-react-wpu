export default function Items({ item, onItemChecked, onItemDeleted }) {
  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={item.checked}
        id={item.id}
        onChange={onItemChecked}
      />
      <span style={item.checked ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.name}
      </span>
      <button onClick={onItemDeleted} data-id={item.id}>
        &times;
      </button>
    </li>
  );
}
