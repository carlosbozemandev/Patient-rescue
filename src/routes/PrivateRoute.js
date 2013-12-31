import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useSessionStorage } from "hooks";
import { ROUTES } from "constants";

const PrivateRoute = ({ children }) => {
  const { getItem } = useSessionStorage();
  const token = getItem("access_token");
  return token ? children : <Navigate to={ROUTES.ADMIN} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
