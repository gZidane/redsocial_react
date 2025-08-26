// npm install react-router-dom
import { Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Post from './pages/Post';

import logo from './logo.svg';
import './App.css';
import Inicio2 from './pages/Inicio2';

function App() {
  return (
    <div>

      <Routes>

        {/* rutas validad para la app y que pagina muestra cada ruta */}
        <Route path="/" element={ <Inicio /> } />
        <Route path="/post/:id" element={ <Post /> } />
        
      </Routes>

    </div>
  );
}

export default App;
