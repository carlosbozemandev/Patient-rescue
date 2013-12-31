import { Button, Result } from "components";
import { Link } from "react-router-dom";
import { UI_TEXT } from "constants";

const NoMatch = () => (
  <Result
    status="404"
    title="404"
    subTitle={UI_TEXT.PAGE_NOT_FOUND.NOT_EXIST}
    extra={
      <Link to="/">
        <Button type="primary" text={UI_TEXT.PAGE_NOT_FOUND.BUTTON} />
      </Link>
    }
  />
);

export default NoMatch;
