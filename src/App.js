// import { ROUTES } from "constants";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NoMatch, Dashboard, Home, Login, AddPatient, PatientRequest, PatientList } from "pages";
import { ROUTES } from "constants";
// import Dashboard from "./pages/dashboard";
// import Home from "./pages/dashboard/Home";
// import Login from "./pages/Login";

const App = () => (
  <Router>
    {" "}
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/admin" element={<Login />} />

      {/* <Route path="/sign-up" element={<SignUp />} /> */}
      {/* <Route exact path="/reset" element={<Reset />} /> */}
      {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}

      <Route element={<Dashboard />} path="/dashboard">
        <Route path={ROUTES.ADD_PATIENT} element={<AddPatient />} />
        <Route index element={<Home />} />
        <Route path={ROUTES.PATIENT_LIST} element={<PatientList />} />
        <Route path={ROUTES.PATIENT_REQUEST} element={<PatientRequest />} />
        <Route path="*" exact element={<NoMatch />} />
      </Route>
      <Route path="*" exact element={<NoMatch />} />
    </Routes>
  </Router>
);

export default App;
