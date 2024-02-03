import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Nav/Nav"
import Home from './components/Home/Home';
import Categorias from './components/Categorias/Categorias';



function App(){

    return (
        <div>
            <BrowserRouter> 
            <Navbar/>
            <Routes>
                <Route path='/' element={<Categorias />} />
                </Routes>
                <Routes>
                <Route path='/' element={<Home />} />
                </Routes>
            <h2>Seguir leyendo...</h2>
            <hr />
            <Home />
            <h2>Suspenso</h2>
            <hr />
            <Home />
            </BrowserRouter>
        </div>
    )
}


export default App