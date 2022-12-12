import { capFirstLetter } from "../../store";

const Column_Cont_Overview = ({ column, teams }) => {
  return (
    <div className="column-cont-overview">
      <h4>{column && capFirstLetter(column)}</h4>
      {teams?.length &&
        teams.map((team, idx) => <div key={idx}>{team[column]}</div>)}
    </div>
  );
};

export default Column_Cont_Overview;
