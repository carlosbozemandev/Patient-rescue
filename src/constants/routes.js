const BASE_ROUTE = "/admin";
const ROUTES = {
  ADMIN: BASE_ROUTE,
  DASHBOARD: `${BASE_ROUTE}/dashboard`,
  MEMBER: {
    CREATE_MEMBERSHIP: "createmembership",
    SEARCH_MEMBERSHIP: "searchmembership",
  },
  CREATE_PROJECT: "create-project",
  PROJECT_LIST: "projects",
  MUSALLI: {
    PARTICIPANT: {
      PARTICIPANT_LIST: "participants",
      ADD_PARTICIPANT: "createparticipant",
    },
    VOLUNTEER_LIST: "volunteers",
    SESSION_LIST: "sessions",
    MOSQUE_LIST: "mosques",
    PAYMENT_LIST: "payments",
    ATTENDANCE_BULK: "attendancebulk",
  },
};
export default ROUTES;
