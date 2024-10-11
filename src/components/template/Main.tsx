export default function Main(props: any) {
  return (
    <div className="flex flex-1 bg-slate-200 px-10 py-12 overflow-auto">
      {props.children}
    </div>
  );
}
