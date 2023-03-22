import React from "react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages";
import PageBase from "../pages/PageBase";
import { queryClient } from "../shared/server/api/queryClient";

const AppRoutes: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageBase page={<Home />} />} />
                    <Route path="/users" element={<PageBase page={<Home />} />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default AppRoutes;
