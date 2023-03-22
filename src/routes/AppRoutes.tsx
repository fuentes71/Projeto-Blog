import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages";
import PageBase from "../pages/PageBase";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageBase page={<Home />} />} />
                <Route path="/users" element={<PageBase page={<Home />} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
