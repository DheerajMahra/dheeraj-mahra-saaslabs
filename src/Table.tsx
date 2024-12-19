import type { Project } from "./types";

type Props = {
  data: Project[];
};

export const Table = ({ data }: Props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>S. No</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({ "s.no": sNo, "percentage.funded": percentageFunded, "amt.pledged": amtPledged }) => (
            <tr key={sNo}>
              <td>{sNo}</td>
              <td>{percentageFunded}</td>
              <td>{amtPledged}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};
