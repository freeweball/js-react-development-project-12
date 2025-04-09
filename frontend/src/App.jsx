import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Login from './pages/login';
import Chat from './pages/chat';
import Error404 from './pages/error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/' element={<Chat />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
