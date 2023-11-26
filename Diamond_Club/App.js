import { PersonProvider } from "./Contexts/PersonProvider";
import { ChartProvider } from "./Contexts/ChartProvider";
import AuthProvider from "./Contexts/AuthProvider";
import Routes from "./Routes/Routes";

function App() {
  return (
    <AuthProvider>
      <PersonProvider>
        <ChartProvider>
          <Routes />
        </ChartProvider>
      </PersonProvider>
    </AuthProvider>
  );
}

export default App;
