export function ConnectivitySection() {
  const tableRows = [
    ["Erode New Bus Stand", "1.2 km", "2 mins"],
    ["Cauvery River", "1 km", "2 mins"],
    ["Thindal Kovil", "3 km", "2 mins"],
    ["Erode Shopping Centre", "5 km", "2 mins"],
    ["Collector Office", "5.5 km", "2 mins"],
    ["Railway Station", "7 km", "2 mins"],
  ];

  return (
    <section className="km-reveal relative mx-auto mt-[42px] w-full pb-[86px] pt-[42px] text-center">
      {/* full background pattern */}

      <div className="relative mx-auto w-full max-w-[1390px]">
        <h2 className="font-bold text-[50px]">
          The Neighbourhood Advantage
        </h2>

        <div className="mx-auto mt-[34px] w-full">
          <table className="w-full border-separate border-spacing-0 text-foreground">
            <thead>
              <tr>
                {["Landmark", "Distance", "Travel Time"].map((heading) => (
                  <th
                    key={heading}
                    className="border-r-[8px] border-[#fbfbef] bg-table-header px-4 py-[25px] text-center text-xl font-bold text-white last:border-r-0 md:text-2xl"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {tableRows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell) => (
                    <td
                      key={cell}
                      className="border-r-[8px] border-t-[10px] border-[#fbfbef] bg-[#eee9cf] px-4 py-[28px] text-center text-lg font-bold last:border-r-0 md:text-xl"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
