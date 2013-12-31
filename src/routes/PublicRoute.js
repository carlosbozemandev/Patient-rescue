import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { ROUTES } from "constants";
import { useSessionStorage } from "hooks";

const PublicRoute = ({ children }) => {
  const { getItem } = useSessionStorage();
  const token = getItem("access_token");
  return !token ? children : <Navigate to={ROUTES.DASHBOARD} />;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
