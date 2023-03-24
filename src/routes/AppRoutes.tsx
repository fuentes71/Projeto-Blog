import React from "react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Article } from "../pages/Blog/Article";
import { Home } from "../pages/Home";
import { PageBase } from "../pages/PageBase";
import { Users } from "../pages/Users/Users";
import { queryClient } from "../shared/server/api/queryClient";

const AppRoutes: React.FC = () => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PageBase page={<Home />} />} />
                        <Route path="/*" element={<PageBase page={<Article />} />} />
                        <Route path="/users/*" element={<PageBase page={<Users />} />} />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </>
    );
};

export default AppRoutes;
