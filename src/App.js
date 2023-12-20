import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/register/RegisterPage'
import LoginForm from './components/login/LoginForm'
import RegisterForm from './components/register/RegisterForm'
import MainPage from './pages/main/MainPage'
import AddJobPage from './pages/addJob/AddJobPage'
import ViewDetailsPage from './pages/viewDetails/ViewDetailsPage';

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
          <Route path='/add-job' element={<AddJobPage />} />
          <Route path='/edit-job/:job_id' element={<AddJobPage />} />
          <Route path='/view-details/:job_id' element={<ViewDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
