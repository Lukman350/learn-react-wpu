import { useState } from 'react';
import Items from './Items';

export default function GroceryList({
  items,
  onItemChecked,
  onItemDeleted,
  onItemCleared,
}) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  switch (sortBy) {
    case 'name':
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'checked':
      sortedItems = items.slice().sort((a, b) => b.checked - a.checked);
      break;
    default:
      sortedItems = items;
      break;
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.length < 1 && (
            <li>
              <p>Hore, tidak ada catatan belanja</p>
            </li>
          )}
          {sortedItems.map((grocery) => (
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
        <select
          onChange={(event) => setSortBy(event.target.value)}
          value={sortBy}
        >
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button
          onClick={() => {
            if (items.length < 1) {
              alert('Tidak ada daftar belanja');
              return;
            }

            if (confirm('Yakin ingin membersihkan daftar belanja?')) {
              onItemCleared();
              alert('Daftar belanja telah dihapus!');
            }
          }}
        >
          Bersihkan Daftar
        </button>
      </div>
    </>
  );
}
