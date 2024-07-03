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

  const handleItemChecked = (id) => {
    const item = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(item);
    saveGrocery(item);
  };

  const handleItemDeleted = (id) => {
    const item = items.filter((grocery) => grocery.id !== id);
    setItems(item);
    saveGrocery(item);
  };

  const handleItemCleared = () => {
    setItems([]);
    saveGrocery([]);
  };

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onItemChecked={handleItemChecked}
        onItemDeleted={handleItemDeleted}
        onItemCleared={handleItemCleared}
      />
      <Footer items={items} />
    </div>
  );
}
