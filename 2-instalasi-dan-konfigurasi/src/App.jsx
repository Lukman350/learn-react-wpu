
import { useState } from 'react'
import Header from './components/Header';

function App() {
  const [likes, setLikes] = useState(0);
    const students = ['Lukman', 'Doddy', 'Erik'];

    function handleClick() {
      setLikes(likes + 1);
    }

    return (
      <>
        <Header name="Lukman" />
        <ul>
          {students.map((student, number) => (
            <li key={number}>{student}</li>
          ))}
        </ul>
        <button onClick={handleClick}>Likes ({likes})</button>
      </>
    );
}

export default App
