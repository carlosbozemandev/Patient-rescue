import { Button, Result } from "components";
import { UI_TEXT } from "constants";

const SomethingWentWrong = () => (
  <div className="flex justify-center items-center h-screen">
    <Result
      status="error"
      title={UI_TEXT.SOMETHING_WENT_WRONG.TITLE}
      subTitle={UI_TEXT.SOMETHING_WENT_WRONG.SUB_TITLE}
      extra={
        <Button
          type="secondary"
          onClick={() => window.location.reload()}
          text={UI_TEXT.SOMETHING_WENT_WRONG.BUTTON}
        />
      }
    />
  </div>
);

export default SomethingWentWrong;
