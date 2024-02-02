import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/navbar"




function App(){

    return (
        <div>
            <BrowserRouter> 
            <Navbar/>
                <Routes>
                  
                     
                
                </Routes>
            </BrowserRouter>
            
         
        </div>
    )
}


export default App