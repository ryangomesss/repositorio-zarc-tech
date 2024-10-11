import { IconArrowNarrowDown, IconArrowNarrowUp } from "@tabler/icons-react";

export default function Tabelas() {
  return (
    <section className="diagramaGrafico">
      <aside className="containerDados">
        <div className="dados">
          <div className="flex justify-start gap-4 items-center">
            <span className="text-2xl">18.6K</span>
            <span className="text-sm text-green-500 flex items-center">
              <IconArrowNarrowUp width={18} />
              <span className="font-normal">18%</span>
            </span>
          </div>
          <span className="text-xs text-slate-500">Unique Visitors</span>
        </div>
      </aside>

      <aside className="containerDados">
        <div className="dados">
          <div className="flex justify-start gap-4 items-center">
            <span className="text-2xl">55.9K</span>
            <span className="text-sm text-green-500 flex items-center">
              <IconArrowNarrowUp width={18} />
              <span className="font-normal">25%</span>
            </span>
          </div>
          <span className="text-xs text-slate-500">Total Pageviews</span>
        </div>
      </aside>

      <aside className="containerDados">
        <div className="dados">
          <div className="flex justify-start gap-4 items-center">
            <span className="text-2xl">54%</span>
            <span className="text-sm text-green-500 flex items-center">
              <IconArrowNarrowDown width={18} />
              <span className="font-normal">7%</span>
            </span>
          </div>
          <span className="text-xs text-slate-500">Bounce Rate</span>
        </div>
      </aside>

      <aside className="containerDados border-r-0">
        <div className="dados">
          <div className="flex justify-start gap-4 items-center">
            <span className="text-2xl">2m56s</span>
            <span className="text-sm text-green-500 flex items-center">
              <IconArrowNarrowUp width={18} />
              <span className="font-normal">12%</span>
            </span>
          </div>
          <span className="text-xs text-slate-500">Visit Duration</span>
        </div>
      </aside>
    </section>
  );
}
