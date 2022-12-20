import { BrowserRouter as Router, Route,Routes, Navigate } from 'react-router-dom'
import HomePage from './scenes/homePage';
import LoginPage from './scenes/loginPage';
import ProfilePage from './scenes/profilePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/home' element={<HomePage/>} />
          <Route path='/profile' element={<ProfilePage/>} />
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
