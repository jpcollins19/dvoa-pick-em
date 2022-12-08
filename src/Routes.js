import { useSelector } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import Pick_Teams_Page from "./components/Pick_Teams/Pick_Teams_Page";
import Rank_Page from "./components/Rank/Rank_Page";

const Routes = () => {
  const teams = useSelector((state) => state.teams);

  return <Switch>{teams?.length ? <Rank_Page /> : <Pick_Teams_Page />}</Switch>;
};

export default withRouter(Routes);
