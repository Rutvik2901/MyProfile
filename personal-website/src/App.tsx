import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./Component/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
    </BrowserRouter>
  );
}

export default App;
