import { Switch, Route } from "react-router-dom";
import InfluencerAccess from "./Frontend/InfluencerAccess";
import BrandLogin from "./Frontend/BrandLogin";
import MainPage from "./Frontend/MainPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/InfluencerAccess">
          <InfluencerAccess />
        </Route>

        <Route path="/BrandLogin">
          <BrandLogin />
        </Route>

        <Route path="/MainPage">
        <MainPage />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
