import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTeam, numbers, pickTeamsColumns, DVOA_Obj } from "../../store";
import Loading from "../Misc/Loading";
import Button from "../Misc/Button";
import Column_Cont from "./Column_Cont";
import "./Pick_Teams.css";

const Pick_Teams_Page = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  const setObj = numbers.reduce((a, number) => {
    const team = {
      team: null,
      spread: null,
    };

    a[number] = team;

    return a;
  }, {});

  const onDropdownChange = (objIdx, teamName) => {
    setObj[objIdx].team = teamName;
  };

  const onChange = (number, key, answer) => {
    const lockedStatus = key === "locked" ? setObj[number][key] : null;

    setObj[number][key] =
      key === "rank"
        ? Number(answer)
        : key === "locked"
        ? !lockedStatus
        : key === "lastTeam"
        ? true
        : answer;
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const teams = Object.values(setObj);

      for (let i = 0; i < teams.length; i++) {
        const lastTeam = teams[i].lastTeam;
        dispatch(addTeam(teams[i]));
        if (lastTeam) break;
      }

      evt.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <form onSubmit={onSubmit} id="submit" className="box pick-teams">
      <div className="reset-cont">
        <Button
          text="Reset Page"
          form="submit"
          onClick={() => setLoading(true)}
        />
      </div>

      <div className="header">
        <h1 className="white-text">Choose Team & Spread Info</h1>
      </div>

      <Button text="Submit" form="submit" />

      <div className="full-spread-info-cont">
        {pickTeamsColumns.map((column, idx) => (
          <Column_Cont
            key={idx}
            column={column}
            onDropdownChange={onDropdownChange}
            onChange={onChange}
          />
        ))}
      </div>
    </form>
  );
};

export default Pick_Teams_Page;
