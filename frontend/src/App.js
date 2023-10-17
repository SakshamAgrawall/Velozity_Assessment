import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Favourite from './pages/Favourite'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favourite' element={<Favourite />} />
      </Routes>
    </>
  );
}

export default App;
