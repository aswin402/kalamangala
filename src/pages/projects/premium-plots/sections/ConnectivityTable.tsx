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
    <section
      className="
        la-reveal
        mx-auto
        mt-[68px]
        w-full
        max-w-[1480px]
        px-4
        pb-[58px]
        sm:mt-[82px]
        sm:px-5
        sm:pb-[70px]
        md:mt-[96px]
        md:pb-[76px]
        lg:mt-[112px]
        3xl:max-w-[1800px]
      "
    >
      <h2
        className="
          mx-auto
          mb-[34px]
          max-w-[340px]
          text-center
          sm:max-w-none
          md:mb-[38px]
        "
      >
        The Neighbourhood Advantage
      </h2>

      <div className="mx-auto w-full max-w-[1328px] overflow-x-auto">
        <table
          className="
            w-full
            table-fixed
            border-separate
            border-spacing-0
            text-foreground
          "
        >
          <thead>
            <tr>
              <th
                className="
                  w-1/3
                  border-r-[10px]
                  border-[#f6f4e7]
                  bg-table-header
                  px-[9px]
                  py-[18px]
                  text-center
                  text-[17px]
                  font-black
                  leading-none
                  tracking-[-0.055em]
                  text-foreground
                  sm:border-r-[8px]
                  sm:px-8
                  sm:py-[22px]
                  sm:text-[22px]
                  md:py-[24px]
                  md:text-[30px]
                "
              >
                Landmark
              </th>

              <th
                className="
                  w-1/3
                  border-r-[10px]
                  border-[#f6f4e7]
                  bg-table-header
                  px-[9px]
                  py-[18px]
                  text-center
                  text-[17px]
                  font-black
                  leading-none
                  tracking-[-0.055em]
                  text-foreground
                  sm:border-r-[8px]
                  sm:px-8
                  sm:py-[22px]
                  sm:text-[22px]
                  md:py-[24px]
                  md:text-[30px]
                "
              >
                Distance
              </th>

              <th
                className="
                  w-1/3
                  bg-table-header
                  px-[9px]
                  py-[18px]
                  text-center
                  text-[17px]
                  font-black
                  leading-none
                  tracking-[-0.055em]
                  text-foreground
                  sm:px-8
                  sm:py-[22px]
                  sm:text-[22px]
                  md:py-[24px]
                  md:text-[30px]
                "
              >
                Travel Time
              </th>
            </tr>
          </thead>

          <tbody>
            {tableRows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, index) => (
                  <td
                    key={`${row[0]}-${cell}-${index}`}
                    className={`
                      border-t-[10px]
                      border-[#f6f4e7]
                      bg-table-row
                      px-[8px]
                      py-[20px]
                      text-center
                      align-middle
                      text-[14px]
                      font-black
                      leading-[0.9]
                      tracking-[-0.06em]
                      sm:px-8
                      sm:py-[22px]
                      sm:text-[18px]
                      sm:leading-none
                      md:py-[23px]
                      md:text-[24px]
                      ${
                        index !== row.length - 1
                          ? "border-r-[10px] border-r-[#f6f4e7] sm:border-r-[8px]"
                          : ""
                      }
                    `}
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