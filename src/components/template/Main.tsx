export default function Main(props: any) {
  return (
    <main className="flex-1 min-h-0 h-full px-10 py-12 overflow-auto scrollbarPage">
      {props.children}
    </main>
  );
}