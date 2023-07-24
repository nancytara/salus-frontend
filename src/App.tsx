import AppButton from "./components/shared/AppButton";
import AppThemeProvider from "./theme/AppThemeProvider";
import { useState } from "react";

function App() {
  const [serverRequestPending, setServerRequestPending] = useState(false);

  return (
    <AppThemeProvider>
      <div className="App">
        {/* <Button variant="contained">Text</Button> */}
        <AppButton
          onClick={() => setServerRequestPending(true)}
          isLoading={serverRequestPending}
          variant="contained"
        >
          Pulsante con caricamento
        </AppButton>
        <AppButton
          onClick={() => setServerRequestPending(true)}
          isLoading={serverRequestPending}
          variant="contained"
          circularProgressProps={{
            size: 20,
            style: { color: "palevioletred", marginLeft: 20 },
          }}
        >
          Pulsante con caricamento 2
        </AppButton>
      </div>
    </AppThemeProvider>
  );
}

export default App;
