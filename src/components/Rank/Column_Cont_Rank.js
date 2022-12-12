import { capFirstLetter } from "../../store";

const Column_Cont_Rank = ({ teams, column }) => {
  return (
    <div className="column-cont-rank">
      {teams?.length && (
        <h2 className="white-text">{column && capFirstLetter(column)}</h2>
      )}

      {teams?.length &&
        teams.map((team, idx) => (
          <input
            key={idx}
            className={`${column && column}-cont-rank`}
            value={team[column && column]}
            readOnly
          ></input>
        ))}
    </div>
  );
};

export default Column_Cont_Rank;
