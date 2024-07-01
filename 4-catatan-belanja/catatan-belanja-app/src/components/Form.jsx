import { useState } from 'react';

export default function Form({ onAddItem }) {
  const [data, setData] = useState({
    name: '',
    quantity: 1,
  });

  const quantityNum = [...Array(20)].map((_, index) => (
    <option key={index} value={index + 1}>
      {index + 1}
    </option>
  ));

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = { ...data, checked: false, id: Date.now() };

    onAddItem(newItem);

    console.log(newItem);

    setData({ name: '', quantity: 1 });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select
          required
          value={data.quantity}
          onChange={(event) =>
            setData({ quantity: Number(event.target.value), name: data.name })
          }
        >
          {quantityNum}
        </select>
        <input
          type="text"
          placeholder="nama barang..."
          required
          onChange={(event) =>
            setData({ quantity: data.quantity, name: event.target.value })
          }
          value={data.name}
        />
      </div>
      <button type="submit">Tambah</button>
    </form>
  );
}
