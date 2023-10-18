import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { NavigationList } from "./NavigationList";
import { Category } from "./Category";
import { Product } from "./Product";

export const Landing=()=>{
    return(
        <BrowserRouter>
        <NavigationList />
            <Routes>
                <Route path="about" element={<About />}/>
                <Route path="/" element={<Home />} />
                <Route path="cont" element={<Contact />} />
                <Route path="cat" element={<Category />} />
                <Route path="product" element={<Product />} />

            </Routes>
        </BrowserRouter>
    );
}