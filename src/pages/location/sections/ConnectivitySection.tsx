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
    <section className="la-reveal mx-auto mt-[112px] w-full max-w-[1480px] px-5 pb-[76px]">
      <h2 className="mb-[38px] text-center font-['Inter'] text-[36px] font-black leading-none tracking-[-0.065em] text-[#132d25] md:text-[48px]">
        The Neighbourhood Advantage
      </h2>

      <div className="mx-auto w-full max-w-[1328px]">
        <table className="w-full border-separate border-spacing-0 font-['Inter'] text-[#132d25]">
          <thead>
            <tr>
              <th className="w-1/3 border-r-[8px] border-[#f6f4e7] bg-[#385f53] px-8 py-[24px] text-center text-[22px] font-black leading-none tracking-[-0.045em] text-[#f7f3df] md:text-[30px]">
                Landmark
              </th>

              <th className="w-1/3 border-r-[8px] border-[#f6f4e7] bg-[#385f53] px-8 py-[24px] text-center text-[22px] font-black leading-none tracking-[-0.045em] text-[#f7f3df] md:text-[30px]">
                Distance
              </th>

              <th className="w-1/3 bg-[#385f53] px-8 py-[24px] text-center text-[22px] font-black leading-none tracking-[-0.045em] text-[#f7f3df] md:text-[30px]">
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
                    className={`border-t-[10px] border-[#f6f4e7] bg-[#ecebdc] px-8 py-[23px] text-center text-[18px] font-black leading-none tracking-[-0.045em] md:text-[24px] ${
                      index !== row.length - 1
                        ? "border-r-[8px] border-r-[#f6f4e7]"
                        : ""
                    }`}
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