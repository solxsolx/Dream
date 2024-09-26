import Main from "@/components/3D/Main";
import Main2 from "@/components/3D/Main2";
import Main3 from "@/components/3D/Main3";
import MarqueeEffect from "@/components/3D/Marquee";
import MarqueeEffect2 from "@/components/3D/Marquee2";
import MarqueeEffect3 from "@/components/3D/Marquee3";
import Experience from "@/components/3D/Scene4";
import Card from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";

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
      <div className="min-h-screen relative flex-col flex items-center justify-center overflow-hidden min-w-full mt-[0rem] bg-neutral-800">
        <MarqueeEffect3 />
        <div className="grid grid-flow-row grid-col-1 md:grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="flex bg-neutral-800 w-full p-4 flex-col md:flex-row">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="flex flex-col">
            <h1 className="font-impact uppercase font-light text-white text-2xl">
              A KID CALLED BEAST
            </h1>
            <p className=" text-sm text-white font-mono uppercase mt-2">
              Join our mission and have your digital identity
            </p>
            <nav className="bg-neutral-800 text-white py-4 mt-10">
              <ul className="flex justify-center space-x-8">
                {["COMMUNITY", "CONTACT", "QUIZ", "BEASTHOOD"].map(
                  (item, index) => (
                    <li key={index} className="relative group">
                      <a
                        href="#"
                        className="text-sm font-medium hover:text-gray-300 transition duration-150 ease-in-out"
                      >
                        {item}
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-in-out"></span>
                      </a>
                      {index < 3 && (
                        <span className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-500">
                          ◼
                        </span>
                      )}
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
          <div className="gap-4">
            <p className="font-impact text-white font-light text-sm uppercase">
              Sign up for our latest news
            </p>
            <div className="relative gap-4">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full bg-transparent border-b font-mono border-white text-white placeholder-white py-2 pr-8 focus:outline-none focus:border-white"
              />
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white">
                <ArrowRight className="font-light text-white w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
