import { BrowserRouter as Router } from 'react-router-dom';
import Directory from './pages/Directory.js';

function App() {
  return (
    <Router basename="/user-directory">
      <div>
        <SearchBar />
        <Directory />
      </div>
    </Router>
    
  );
}

export default App;
