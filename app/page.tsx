import Main from "@/components/3D/Main";
import Main2 from "@/components/3D/Main2";
import Main3 from "@/components/3D/Main3";
import MarqueeEffect from "@/components/3D/Marquee";
import MarqueeEffect2 from "@/components/3D/Marquee2";
import Experience from "@/components/3D/Scene4";

export default function Home() {
  return (
    <div className="overflow-hidden overflow-x-hidden">
      <div className="relative">
        <Main />
        <Main2 />
        <MarqueeEffect />
        <Main3 />
      </div>
      <div className="min-h-screen overflow-hidden min-w-full mt-[40rem] bg-neutral-800">
        <Experience />
        <p className="uppercase text-gray-300 font-mono font-bold text-sm md:text-base mt-28 max-w-96 ml-auto mr-4">
          A core expression of who you are. Its a part of your nature. It is
          inside all of us. Some more free than others tReality has evolved
          beyond the physical To facilitate & create new digital tribes what is
          your beast tribe
        </p>
        <div className="flex flex-col pl-8 gap-8">
          <h1
            className="font-impact text-mammoth max-w-[100rem] mt-12 text-wrap text-white
          "
          >
            What kind beast are you
          </h1>
          <div className="flex flex-row gap-4 ">
            <button className="px-6 py-2 font-light hover:bg-neutral-700 rounded-3xl border-2 border-white bg-neutral-800 uppercase text-white">
              Start
            </button>
            <button className="px-6 py-2 font-light rounded-3xl hover:bg-neutral-700 border-2 border-white bg-neutral-800 text-white uppercase">
              Get your pass
            </button>
          </div>
        </div>
        <MarqueeEffect2 />
        <div className="uppercase font-impact top-[165rem] text-mammoth transform translate-x-40 text-white z-20 shadow-inner rounded-3xl absolute">
          This is beast studio
        </div>
      </div>
      <div className="min-h-screen overflow-hidden min-w-full mt-[0rem] bg-neutral-800"></div>
    </div>
  );
}
