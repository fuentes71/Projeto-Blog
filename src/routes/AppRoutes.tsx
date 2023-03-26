import { FC } from "react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BasePage } from "../pages/BasePage";
import { Article } from "../pages/Blog/Article";
import { Posts } from "../pages/Blog/Posts";
import { Users } from "../pages/Users/Users";
import { queryClient } from "../shared/server/api/queryClient";

const AppRoutes: FC = () => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<BasePage page={<Posts />} />} />
                        <Route path="/*" element={<BasePage page={<Article />} />} />
                        <Route path="/users/*" element={<BasePage page={<Users />} />} />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </>
    );
};

export default AppRoutes;
