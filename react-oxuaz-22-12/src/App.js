import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";

import Siyaset from './components/pages/Siyaset';
import Iqtisadiyat from './components/pages/Iqtisadiyat';
import Cemiyyet from './components/pages/Cemiyyet';
import Biznes from './components/pages/Biznes';
import Muharibe from './components/pages/Muharibe';
import Home from './components/pages/Home';
import { useState } from 'react';

function App() {
  let [allcards, setAllCards] = useState([])

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home setAllCards={setAllCards} />} />
        <Route path='/siyaset' element={<Siyaset />} />
        <Route path='/iqtisadiyat' element={<Iqtisadiyat />} />
        <Route path='/cemiyyet' element={<Cemiyyet />} />
        <Route path='/biznes' element={<Biznes />} />
        <Route path='/muharibe' element={<Muharibe />} />
      </Routes>

      <Card allcards={allcards} />
    </BrowserRouter>
  );
}

export default App;
