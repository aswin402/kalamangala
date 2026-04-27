const DARK = "#17352d";

export function NeighbourhoodTable() {
  const tableRows = [
    ["Government School", "500 m", "2 mins"],
    ["Proposed Park", "1 km", "2 mins"],
    ["Thindal Kovil", "3 km", "5 mins"],
    ["Erode Railway Station", "4 km", "15 mins"],
    ["Collector Office", "5 km", "7 mins"],
    ["Cauvery River", "700 m", "2 mins"],
  ];

  return (
    <section className="km-reveal mx-auto mt-16 max-w-[740px] text-center">
      <h2 className="text-[18px] font-black tracking-[-0.06em] sm:text-[22px]">
        The Neighbourhood Advantage
      </h2>

      <div className="mt-5 overflow-hidden">
        <table className="w-full border-collapse text-[10px] sm:text-[12px]">
          <thead>
            <tr style={{ backgroundColor: DARK, color: "white" }}>
              <th className="border border-[#f6f3df] px-4 py-3 text-center font-bold">
                Landmark
              </th>
              <th className="border border-[#f6f3df] px-4 py-3 text-center font-bold">
                Distance
              </th>
              <th className="border border-[#f6f3df] px-4 py-3 text-center font-bold">
                Travel Time
              </th>
            </tr>
          </thead>

          <tbody>
            {tableRows.map((row) => (
              <tr key={row[0]} className="bg-[#eee9cf]">
                {row.map((cell) => (
                  <td
                    key={cell}
                    className="border border-[#f6f3df] px-4 py-3 text-center font-medium"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
