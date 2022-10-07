import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignupForm from './components/SignupForm';
import ScoreTable from './components/ScoreTable';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      < Route exact path='/' element={<SignupForm />}/>
      < Route exact path='/scores' element={<ScoreTable />}/>
      </Routes>
    </Router>
  );
}

export default App;
