import { AppRouter } from "@/routing/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import "@/lib/i18n/config";
function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
