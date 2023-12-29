import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/register/RegisterPage'
import LoginPage from './pages/login/LoginPage';
import MainPage from './pages/main/MainPage'
import AddJobPage from './pages/addJob/AddJobPage'
import ViewDetailsPage from './pages/viewDetails/ViewDetailsPage';
import NotFound from './pages/notFound/NotFound'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/add-job' element={<AddJobPage />} />
          <Route path='/edit-job/:job_id' element={<AddJobPage />} />
          <Route path='/view-details/:job_id' element={<ViewDetailsPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
