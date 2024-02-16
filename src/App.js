import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from './Components/Home/Home';
// import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
             <Route index element={<Home/>} />
             {/* <Route path='/Header' element={<Header />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App