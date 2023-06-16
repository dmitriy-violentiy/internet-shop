import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Main from "./pages/Main";
import Contacts from "./pages/Contacts";

export default function App() {

   return (
      <BrowserRouter>
         <Routes>
            <Route path='/pages/About' element={<About />} />
            <Route path='/pages/Contacts' element={<Contacts />} />
            <Route path='/' element={<Main />} />
         </Routes>
      </BrowserRouter>
   )

}

