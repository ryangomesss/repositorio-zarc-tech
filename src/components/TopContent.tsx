export default function TopContent() {
  return (
    <section className="topContent">
      <div className="flex justify-between">
        <h2 className="font-bold text-xl">Top Content</h2>
        <span className="">...</span>
      </div>
      <div className="englobar">
        <div className="bg-green-500 flex justify-between">
          <span className="pt-5">URL</span>
          <span className="esquerda">Views</span>
          <span className="direita">Uniques</span>
        </div>
        <div className="">
          <span className="">/</span>
          <span className="esquerda">2.5K</span>
          <span className="direita">2.1K</span>
        </div>
        <div className="">
          <span className="">/blog/</span>
          <span className="esquerda">376</span>
          <span className="direita">139</span>
        </div>
        <div className="">
          <span className="">/reserve/sucess</span>
          <span className="esquerda">468</span>
          <span className="direita">290</span>
        </div>
        <div className="">
          <span className="">/product/product-details</span>
          <span className="esquerda">298</span>
          <span className="direita">176</span>
        </div>
        <div className="">
          <span className="">/blog/digital-marketing</span>
          <span className="esquerda">179</span>
          <span className="direita">57</span>
        </div>
      </div>
    </section>
  );
}
