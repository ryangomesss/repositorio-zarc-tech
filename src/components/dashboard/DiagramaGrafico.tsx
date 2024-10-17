import { IconArrowNarrowDown, IconArrowNarrowUp } from "@tabler/icons-react";

export default function Tabelas() {
  return (
    <section className="flex flex-row justify-between py-6 rounded-md shadow-md">
      <div className="containerDados">
        <div className="flex flex-col px-10">
          <div className="flex justify-start gap-4 items-center">
            <span className="text-2xl">18.6K</span>
            <span className="text-sm text-green-500 flex items-center">
              <IconArrowNarrowUp width={18} />
              <span className="font-normal">18%</span>
            </span>
          </div>
          <span className="text-xs text-slate-500">Unique Visitors</span>
        </div>
      </div>

      <div className="containerDados">
        <div className="flex flex-col px-10">
          <div className="flex justify-start gap-4 items-center">
            <span className="text-2xl">55.9K</span>
            <span className="text-sm text-green-500 flex items-center">
              <IconArrowNarrowUp width={18} />
              <span className="font-normal">25%</span>
            </span>
          </div>
          <span className="text-xs text-slate-500">Total Pageviews</span>
        </div>
      </div>

      <div className="containerDados">
        <div className="flex flex-col px-10">
          <div className="flex justify-start gap-4 items-center">
            <span className="text-2xl">54%</span>
            <span className="text-sm text-green-500 flex items-center">
              <IconArrowNarrowDown width={18} />
              <span className="font-normal">7%</span>
            </span>
          </div>
          <span className="text-xs text-slate-500">Bounce Rate</span>
        </div>
      </div>

      <div className="containerDados border-r-0">
        <div className="flex flex-col px-10">
          <div className="flex justify-start gap-4 items-center">
            <span className="text-2xl">2m56s</span>
            <span className="text-sm text-green-500 flex items-center">
              <IconArrowNarrowUp width={18} />
              <span className="font-normal">12%</span>
            </span>
          </div>
          <span className="text-xs text-slate-500">Visit Duration</span>
        </div>
      </div>
    </section>
  );
}
