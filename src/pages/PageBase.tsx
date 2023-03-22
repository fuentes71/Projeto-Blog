import React from "react";

import { Nav } from "../shared/components";

const PageBase: React.FC<{ page: React.ReactNode }> = ({ page }) => {
    return (
        <>
            {page}
            <Nav />
        </>
    );
};

export default PageBase;
