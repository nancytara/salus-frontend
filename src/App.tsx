import { RouterProvider } from "react-router-dom";
import AppThemeProvider from "./theme/AppThemeProvider";
import router from "./navigation/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <RouterProvider router={router} />
      </AppThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
