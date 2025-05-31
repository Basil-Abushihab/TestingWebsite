import { AppRouter } from "@/routing/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
