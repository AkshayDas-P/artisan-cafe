import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from './pages/home/Home'
// import About from './pages/about/About'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                {/* <Route path='/about' element={<About/>} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App