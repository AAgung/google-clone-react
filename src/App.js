import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/Home';
import SearchListPage from './pages/SearchList';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/search" element={<SearchListPage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
