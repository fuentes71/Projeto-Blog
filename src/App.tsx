import { CssBaseline } from "@mui/material";

import AppRoutes from "./routes/AppRoutes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";

const App = () => {
    return (
        <>
            <CssBaseline />
            <AppThemeProvider>
                <AppRoutes />
            </AppThemeProvider>
        </>
    );
};

export default App;
