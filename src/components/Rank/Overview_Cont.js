import Column_Cont_Overview from "./Column_Cont_Overview";

const Overview_Cont = ({ teams }) => {
  const sortedBySpread = teams.sort((a, b) => b.spread - a.spread);

  const columns = ["team", "spread"];

  return (
    <div className="overview-cont">
      {columns.map((column, idx) => (
        <Column_Cont_Overview
          key={idx}
          column={column}
          teams={sortedBySpread}
        />
      ))}
    </div>
  );
};

export default Overview_Cont;
