export default function TopChannels() {
  const data = [
    { url: "Google", views: 4200, uniques: 3900 },
    { url: "Github", views: 1900, uniques: 509 },
    { url: "Producthunt", views: 1500, uniques: 986 },
    { url: "Facebook", views: 974, uniques: 639 },
    { url: "Twitter", views: 179, uniques: 57 },
  ];

  const maximoVisualizacoes = Math.max(...data.map((item) => item.views));
  const primeiroItem = data[0].views;

  const formatarNumero = (numero: number) => {
    if (numero >= 1000) {
      return (numero / 1000).toFixed(1) + "K";
    } else {
      return numero;
    }
  };

  return (
    <section className="flex flex-1 flex-col shadow-lg rounded p-8 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-200">
        Top Channels
      </h2>
      <table className="flex flex-col min-w-full text-left table-auto">
        <thead>
          <tr className="flex justify-between">
            <th className="text-slate-500 dark:text-gray-400 font-normal px-4 py-2">
              URL
            </th>
            <div>
              <th className="text-slate-500 dark:text-gray-400 font-normal px-4 py-2">
                Views
              </th>
              <th className="text-slate-500 dark:text-gray-400 font-normal px-4 py-2">
                Uniques
              </th>
            </div>
          </tr>
        </thead>
        <tbody className="flex flex-1 flex-col gap-4">
          {data.map((item, index) => {
            const percentage = (item.views / maximoVisualizacoes) * 100;

            return (
              <tr
                key={index}
                className="flex justify-between w-full font-semibold text-gray-900 dark:text-gray-200"
                style={{
                  background: `linear-gradient(to right, ${
                    index === 0
                      ? "rgba(226, 232, 240, 1)"
                      : `rgba(226, 232, 240, ${percentage / 100})`
                  } ${index === 0 ? 86.5 : percentage}%, transparent 0%)`,
                }}
              >
                <div>
                  <td className="px-4 py-2">{item.url}</td>
                </div>
                <div className="flex justify-around w-3/12">
                  <td className="px-4 py-2 w-full">
                    {formatarNumero(item.views)}
                  </td>
                  <td className="px-4 py-2 w-full">
                    {formatarNumero(item.uniques)}
                  </td>
                </div>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
