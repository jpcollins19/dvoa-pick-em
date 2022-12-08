import { capFirstLetter } from "../../store";
import Dropdown from "../Misc/Dropdown";

const Column_Cont = ({ column, idx }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const teams = [
    { value: "9ers", label: "9ers" },
    { value: "bears", label: "bears" },
    { value: "bengals", label: "bengals" },
    { value: "bills", label: "bills" },
    { value: "boys", label: "boys" },
    { value: "broncos", label: "broncos" },
    { value: "browns", label: "browns" },
    { value: "bucs", label: "bucs" },
    { value: "cards", label: "cards" },
    { value: "chargers", label: "chargers" },
    { value: "chiefs", label: "chiefs" },
    { value: "colts", label: "colts" },
    { value: "eagles", label: "eagles" },
    { value: "falcons", label: "falcons" },
    { value: "fins", label: "fins" },
    { value: "giants", label: "giants" },
    { value: "hawks", label: "hawks" },
    { value: "jags", label: "jags" },
    { value: "jets", label: "jets" },
    { value: "lions", label: "lions" },
    { value: "pack", label: "pack" },
    { value: "panthers", label: "panthers" },
    { value: "pats", label: "pats" },
    { value: "raiders", label: "raiders" },
    { value: "rams", label: "rams" },
    { value: "ravens", label: "ravens" },
    { value: "saints", label: "saints" },
    { value: "steelers", label: "steelers" },
    { value: "texans", label: "texans" },
    { value: "titans", label: "titans" },
    { value: "vikings", label: "vikings" },
    { value: "wash", label: "wash" },
  ];

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
                options={teams}
                width="12rem"
                // set={(value) => onChange([idxRank + 1, value.value.name], group)}
              />
            ) : (
              <input
                className={column !== "locked" ? "center bold" : ""}
                type={
                  column === "locked" || column === "lastTeam" ? "checkbox" : ""
                }
                // onChange={(ev) => onChange(number, column, ev.target.value)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Column_Cont;
