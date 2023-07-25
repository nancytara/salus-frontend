import AppLayout from "./components/layout/AppLayout";
import AppThemeProvider from "./theme/AppThemeProvider";

function App() {
  return (
    <AppThemeProvider>
      <AppLayout />
    </AppThemeProvider>
  );
}

export default App;
