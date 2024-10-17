export default function TopContent() {
  const data = [
    { url: "/", views: 2500, uniques: 2100 },
    { url: "/blog/", views: 376, uniques: 139 },
    { url: "/reserve/sucess", views: 468, uniques: 290 },
    { url: "/product/product-details", views: 298, uniques: 176 },
    { url: "/blog/digital-marketing", views: 179, uniques: 57 },
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
        Top Content
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
                <td className="px-4 py-2">{item.url}</td>
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
