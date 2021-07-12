import NavBar from "./NavBar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import GetJobRoles from "./Role/GetJobRoles";
import GetBandResponsibilities from "./Band/GetBandResponsibilities";
import CapabilityPerJobFamily from "./Capability/CapabilityPerJobFamily";
import GetTrainingBand from "./Band/GetTrainingBand";
import Band from "./Band/GetBandCompetencies";
import AddRole from "./Role/AddRole";
import AddJobFamily from "./Capability/AddJobFamily"


const App = () => {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path="/">
            <NavBar />
          </Route>
          <Route exact path="/Capability/CapabilityPerJobFamily">
            <NavBar />
            <CapabilityPerJobFamily />
          </Route>

          <Route exact path="/role/GetJobRoles">
            <NavBar />
            <GetJobRoles />
          </Route>

          <Route exact path="/band/getTrainingBand">
            <NavBar />
            <GetTrainingBand />
          </Route>

          <Route exact path="/band/GetBandCompetencies">
            <NavBar />
            <Band />
          </Route>

          <Route exact path="/role/addRole">
            <NavBar />
            <AddRole />
          </Route>

          <Route exact path="/Band/GetBandResponsibilities">
          <NavBar />
            <GetBandResponsibilities/>
          </Route>

          <Route exact path="/Capability/AddJobFamily">
          <NavBar />
            <AddJobFamily/>
          </Route>



        </Switch>
      </Router>
    </div>
  );
}

export default App;
