import React from 'react';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Home from '../components/pages/Home';
import News from '../components/pages/News';
import NotFoundPages from '../components/pages/NotFoundPages';
import Pages from '../components/pages/Pages';
import Shop from '../components/pages/Shop';
import Nav from '../components/Nav';

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/shop" element={<Shop/>}></Route>
                <Route path="/news" element={<News/>}></Route>
                <Route path="/pages" element={<Pages/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="*" element={<NotFoundPages/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter