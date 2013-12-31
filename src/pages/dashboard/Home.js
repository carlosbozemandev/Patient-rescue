import { Divider } from "components";
import { UI_TEXT } from "constants";

const Home = () => (
  <div className="dashboard">
    <Divider orientation="left" className="form-divider first">
      {UI_TEXT.HOME.HOME}
    </Divider>
    <h2 className="text-center font-bold">{UI_TEXT.HOME.WELCOME}</h2>
    <p className="text-center">{UI_TEXT.HOME.BAITUSSALAM_INTRO}</p>
  </div>
);

export default Home;
