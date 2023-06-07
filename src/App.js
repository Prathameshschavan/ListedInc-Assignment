import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup.jsx';
import Dashboard from './components/Dashboard';
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/Signup' element={<Signup />} />
      <Route path='/*' element={<Signup />} />
      <Route path='/Dashboard' element={<Dashboard />} />
    </Routes>
    </div>
  );
}

export default App;
