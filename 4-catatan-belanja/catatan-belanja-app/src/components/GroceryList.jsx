import Items from './Items';

// const groceryItems = [
//   {
//     id: 1,
//     name: 'Kopi Bubuk',
//     quantity: 2,
//     checked: true,
//   },
//   {
//     id: 2,
//     name: 'Gula Pasir',
//     quantity: 5,
//     checked: false,
//   },
//   {
//     id: 3,
//     name: 'Air Mineral',
//     quantity: 3,
//     checked: false,
//   },
// ];

export default function GroceryList({ items, onItemChecked, onItemDeleted }) {
  return (
    <>
      <div className="list">
        <ul>
          {items.length < 1 && (
            <li>
              <p>Hore, tidak ada catatan belanja</p>
            </li>
          )}
          {items.map((grocery) => (
            <Items
              key={grocery.id}
              item={grocery}
              onItemChecked={onItemChecked}
              onItemDeleted={onItemDeleted}
            />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button>Bersihkan Daftar</button>
      </div>
    </>
  );
}
