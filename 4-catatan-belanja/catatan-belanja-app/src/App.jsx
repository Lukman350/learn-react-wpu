import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import GroceryList from './components/GroceryList';
import Header from './components/Header';

export const GROCERY_KEY = 'groceries-items';

function saveGrocery(items) {
  localStorage.setItem(GROCERY_KEY, JSON.stringify(items));
}

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (localStorage) {
      let dataItems = localStorage.getItem(GROCERY_KEY);

      if (dataItems) {
        dataItems = dataItems.replace(/'/g, '"');
        const data = JSON.parse(dataItems);
        setItems(data);
      }
    }
  }, []);

  const handleAddItem = (item) => {
    const newItem = [...items, item];
    setItems(newItem);
    saveGrocery(newItem);
  };

  const handleItemChecked = (event) => {
    const item = event.target;
    const findItem = items.find((grocery) => grocery.id === Number(item.id));
    findItem.checked = item.checked;
    const copiedItem = items.slice();
    setItems(copiedItem);
    saveGrocery(items);
  };

  const handleItemDeleted = (event) => {
    const itemId = event.target.getAttribute('data-id');

    if (itemId) {
      const item = items.filter((grocery) => grocery.id !== Number(itemId));
      setItems(item);
      saveGrocery(item);
    }
  };

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onItemChecked={handleItemChecked}
        onItemDeleted={handleItemDeleted}
      />
      <Footer />
    </div>
  );
}
