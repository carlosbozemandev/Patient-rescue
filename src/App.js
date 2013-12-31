import { ROUTES } from "constants";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "routes";
import CreateProject from "pages/dashboard/CreateProjects";
import ProjectList from "pages/dashboard/ProjectList";

const CreateMemberShip = React.lazy(() => import("pages/dashboard/CreateMemberShip"));
const SearchMembership = React.lazy(() => import("pages/dashboard/SearchMembership"));
const Home = React.lazy(() => import("pages/dashboard/Home"));
const Dashboard = React.lazy(() => import("pages/dashboard"));
const Login = React.lazy(() => import("pages/Login"));
const NoMatch = React.lazy(() => import("pages/NoMatch"));
const ParticipantList = React.lazy(() =>
  import("pages/dashboard/IamMusalli/Participant/Participant")
);
const SessionList = React.lazy(() => import("pages/dashboard/IamMusalli/Session"));
const PaymentList = React.lazy(() => import("pages/dashboard/IamMusalli/Payment"));
const VolunteerList = React.lazy(() => import("pages/dashboard/IamMusalli/Volunteer"));
const MosqueList = React.lazy(() => import("pages/dashboard/IamMusalli/Mosque"));
const AttendanceBulk = React.lazy(() => import("pages/dashboard/IamMusalli/AttendanceBulk"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          index
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path={ROUTES.ADMIN}
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
          path={ROUTES.DASHBOARD}
        >
          <Route index element={<Home />} />
          <Route path={ROUTES.MEMBER.SEARCH_MEMBERSHIP} element={<SearchMembership />} />
          <Route path={ROUTES.MEMBER.CREATE_MEMBERSHIP} element={<CreateMemberShip />} />
          <Route path={ROUTES.CREATE_PROJECT} element={<CreateProject />} />
          <Route path={ROUTES.PROJECT_LIST} element={<ProjectList />} />
          <Route path={ROUTES.MUSALLI.MUSALLI_VOLUNTEER_LIST} element={<VolunteerList />} />
          {/* Musalli Participant */}
          <Route path={ROUTES.MUSALLI.PARTICIPANT.PARTICIPANT_LIST} element={<ParticipantList />} />
          <Route path={ROUTES.MUSALLI.PARTICIPANT.ADD_PARTICIPANT} element={<ParticipantList />} />

          <Route path={ROUTES.MUSALLI.MUSALLI_PAYMENT_LIST} element={<PaymentList />} />
          <Route path={ROUTES.MUSALLI.MUSALLI_SESSION_LIST} element={<SessionList />} />
          <Route path={ROUTES.MUSALLI.MUSALLI_MOSQUE_LIST} element={<MosqueList />} />
          <Route path={ROUTES.MUSALLI.ATTENDANCE_BULK} element={<AttendanceBulk />} />
          <Route path="*" exact element={<NoMatch />} />
        </Route>
        <Route path="*" exact element={<NoMatch />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
