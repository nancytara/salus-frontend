import { RouterProvider } from "react-router-dom";
import AppThemeProvider from "./theme/AppThemeProvider";
import router from "./navigation/Router";

function App() {
  return (
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  );
}

export default App;
