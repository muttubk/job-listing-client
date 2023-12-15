import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/register/RegisterPage'
import LoginForm from './components/login/LoginForm'
import RegisterForm from './components/register/RegisterForm'
import MainPage from './pages/main/MainPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegisterPage />} >
            <Route path='/' element={<LoginForm />} />
            <Route path='register' element={<RegisterForm />} />
          </Route>
          <Route path='/main' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
