import { CirclePlus, CookingPot } from "lucide-react";

export default function Content(props) {
  return (
    <section className="h-[calc(100vh-100px)] flex flex-col justify-end px-24 py-8">
      <div className="flex-1">
        {/*  <!-- Empty space for ingredients and other content --> */}
      </div>
      <form>
        <div className="flex mb-2 gap-2">
          <input
            type="text"
            placeholder="e.g. tomato"
            aria-label="Add ingredient"
            className="flex-1 h-16 px-4 text-xl rounded border border-orange-500 bg-orange-500/10"
          />
          <button className="flex justify-center items-center gap-4 p-4 text-lg border-2 rounded border-orange-500 bg-orange-500/10 hover:bg-orange-400/20 font-semibold">
            <CirclePlus size={24} className="text-orange-500" />
            Add ingredient
          </button>
          <button className="flex justify-center items-center gap-4 p-4 text-xl font-semibold border rounded border-orange-500 bg-orange-500 hover:bg-orange-600">
            <CookingPot size={24} className="text-white" />
            Cook Up!
          </button>
        </div>
      </form>
    </section>
  );
}
