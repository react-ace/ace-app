import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import icon from '../../assets/icon.svg';
import './App.scss';

const Hello = () => {
  return (
    <div>
      <img width="200px" alt="icon" src={icon} />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="*" element={<Hello />} />
      </Routes>
    </Router>
  );
};

export default App;
