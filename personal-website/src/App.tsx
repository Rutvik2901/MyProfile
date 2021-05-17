import { BrowserRouter, Route } from "react-router-dom";
import SecondComponent from "./Component/SecondComponent";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={SecondComponent} />
    </BrowserRouter>
  );
}

export default App;
