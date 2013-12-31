import { notification } from "components";
import { PropTypes } from "prop-types";

const toast = ({ type, description, title, obj, onClick, onClose }) => {
  const object = obj || {};

  object.key = Date.now();
  if (type === "success") {
    object.message = title || "Success";
  } else if (type === "info") {
    object.message = title || "Info";
  } else if (type === "warning") {
    object.message = title || "Warning";
  } else if (type === "error") {
    object.message = title || "Error";
  }

  const style = {
    width: object.Width || "100",
    marginLeft: object.marginLeft || "none",
    opacity: object.opacity || 0.91,
  };

  object.style = style;
  object.description = description || object.description;

  object.onClick = () => {
    if (onClick) onClick();
    notification.close(object.key);
  };

  object.onClose = () => {
    if (onClose) onClose();
  };

  return notification[type]({
    ...object,
  });
};

toast.defaultProps = {
  title: "",
  obj: {},
  onClick: () => {},
  onClose: () => {},
};
toast.propTypes = {
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string,
  obj: PropTypes.shape({}),
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};

export default toast;
