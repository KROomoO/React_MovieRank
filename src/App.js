import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<Detail />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
