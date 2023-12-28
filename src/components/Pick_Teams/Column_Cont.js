import { capFirstLetter, numbers, teamData } from "../../store";
import Dropdown from "../Misc/Dropdown";

const Column_Cont = ({ column, onDropdownChange, onChange }) => {
  return (
    <div className="column-cont">
      <h2 className="white-text">
        {column !== "lastTeam" ? capFirstLetter(column) : ""}
      </h2>
      <div className="input-options-cont">
        {numbers.map((number, idx) => (
          <div key={idx} className={`${column}-cont`}>
            {column === "team" ? (
              <Dropdown
                placeholder="Select a Team"
                options={teamData}
                width="12rem"
                set={(value) => onDropdownChange(number, value.value)}
              />
            ) : (
              <input
                className={column !== "locked" ? "center bold" : ""}
                type={
                  column === "locked" || column === "lastTeam" ? "checkbox" : ""
                }
                onChange={(ev) => onChange(number, column, ev.target.value)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Column_Cont;
