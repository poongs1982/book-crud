import './App.css';
import BookList from './BookList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>REACT BOOK CRUD APPLICATION</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
