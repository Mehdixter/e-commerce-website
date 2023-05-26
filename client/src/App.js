import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Layout from './pages/Layout';
import Signup from './pages/Auth/Signup';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" component={Login} />
      <Route path="/" component={Layout} />
      </Routes>
    </Router>
  );
}

export default App;
