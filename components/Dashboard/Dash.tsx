"use client";

import { cn } from "@/lib/index";
import { Calendar, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Dash() {
  return (
    <div className="min-w-full min-h-screen bg-white md:p-4 p-2">
      <div className="pt-8 px-4 rounded-3xl bg-slate-100 pb-4 min-w-full flex flex-col md:flex-row">
        <section className="md:w-3/4 flex flex-col items-center p-2 gap-4">
          <CardSection />
          <ProviderGrid />
        </section>
        <section className="md:w-1/4 bg-white rounded-3xl p-2">
          <SideContent />
        </section>
      </div>
    </div>
  );
}
function SideContent() {
  return <div></div>;
}

function ProviderGrid() {
  return (
    <div className="grid grid-flow-row  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <ProviderCard
        imageSrc="/ape2.jpg"
        title="Sample Title"
        highestBid="1.5"
        currency="ETH"
        category="animal"
        description="This is a sample description."
      />
      <ProviderCard
        imageSrc="/ape2.jpg"
        title="Sample Title"
        highestBid="1.5"
        currency="ETH"
        category="animal"
        description="This is a sample description."
      />
      <ProviderCard
        imageSrc="/ape2.jpg"
        title="Sample Title"
        highestBid="1.5"
        currency="ETH"
        category="animal"
        description="This is a sample description."
      />
      <ProviderCard
        imageSrc="/ape2.jpg"
        title="Sample Title"
        highestBid="1.5"
        currency="ETH"
        category="animal"
        description="This is a sample description."
      />
      <ProviderCard
        imageSrc="/ape2.jpg"
        title="Sample Title"
        highestBid="1.5"
        currency="ETH"
        category="animal"
        description="This is a sample description."
      />
      <ProviderCard
        imageSrc="/ape2.jpg"
        title="Sample Title"
        highestBid="1.5"
        currency="ETH"
        category="animal"
        description="This is a sample description."
      />
    </div>
  );
}

function ProviderCard({
  category,
  imageSrc,
  title,
  highestBid,
  currency,
  description,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-64 h-[26rem] perspective" onClick={handleFlip}>
      <motion.div
        className="w-full h-full transition-all duration-500 [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <div className="w-full h-full p-1 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-100 via-purple-500 to-blue-600 animate-gradient-x">
            <div className="absolute uppercase z-20 rounded-tl-2xl rounded-br-3xl bg-purple-600/70 text-white text-sm px-6 py-1 bottom-auto top-1 left-1 right-auto">
              {category}
            </div>
            <div className="absolute inset-[3px] z-0 bg-gray-900 rounded-2xl"></div>
            <div className="relative h-full z-10 bg-gray-900 rounded-xl p-4 flex flex-col">
              <div className="flex-grow">
                <Image
                  src={imageSrc}
                  alt={title}
                  width={224}
                  height={224}
                  className="w-full h-56 object-cover rounded-lg"
                />
              </div>
              <div className="mt-4 text-white">
                <h3 className="text-lg font-semibold">{title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-400">Highest Bid</span>
                  <span className="text-lg font-bold">
                    {highestBid} {currency}
                  </span>
                </div>
              </div>
              <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-tr-3xl rounded-bl-3xl hover:bg-purple-700 transition-colors">
                See Detail →
              </button>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="w-full h-full p-1 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-100 via-purple-500 to-blue-600 animate-gradient-x">
            <div className="absolute inset-[3px] z-0 bg-gray-900 rounded-2xl"></div>
            <div className="relative h-full z-10 bg-gray-900 rounded-xl p-6 flex flex-col justify-center items-center text-white">
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              <p className="text-sm text-center mb-4">{description}</p>
              <div className="mt-auto">
                <p className="text-sm text-gray-400">Current Highest Bid</p>
                <p className="text-lg font-bold">
                  {highestBid} {currency}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Dash;
function CardSection() {
  return (
    <div className="min-w-full bg-white rounded-3xl p-2 flex flex-col sm:flex-row gap-2">
      <div className="w-full sm:w-1/2 rounded-3xl">
        <FlipCard />
      </div>
      <div className="w-full sm:w-1/2">
        <AvatarCard />
      </div>
    </div>
  );
}

function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden cursor-pointer"
      onClick={handleFlip}
    >
      <motion.div
        className="w-full h-full transition-all duration-500 [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <Image
            src="/iron.jpeg"
            alt="Iron Man"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
          <div className="absolute top-0 right-0 bg-black/30 backdrop-blur-sm p-2 sm:p-3 rounded-bl-3xl transform translate-x-1/3 -translate-y-1/3 hover:translate-x-0 hover:translate-y-0 transition-transform duration-300 ease-in-out">
            <p className="text-xs sm:text-sm text-gray-300 font-semibold">
              Auction Starts in
            </p>
            <div className="flex items-center space-x-2 mt-1">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-lime-300 border border-gray-300"></div>
              <p className="font-bold text-xs sm:text-sm text-white uppercase">
                14H:17M:34S
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-black/50 backdrop-blur-md rounded-3xl border border-gray-300 p-3 sm:p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs sm:text-sm text-gray-300">Current bid</p>
                <h1 className="text-lime-300 text-base sm:text-lg font-bold">
                  1.52 ETH
                </h1>
              </div>
              <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-lime-300 text-black rounded-full border border-black flex items-center space-x-1 hover:bg-lime-400 transition-colors duration-300">
                <span className="font-bold text-xs sm:text-sm">Place Bid</span>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-bl from-purple-300 to-teal-400 rounded-3xl p-6 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-white mb-4">Flip Side</h2>
          <p className="text-white text-center">
            This is the flip side of the card. You can add more details or
            functionality here.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function AvatarCard() {
  const [selected, setSelected] = useState(0);
  const tabs = ["Details", "Activity", "Offers"];

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl overflow-hidden">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <ul className="flex justify-between gap-1 sm:gap-2 bg-gray-100 rounded-full p-1">
          {tabs.map((tab, index) => (
            <li
              key={tab}
              onClick={() => setSelected(index)}
              className={cn(
                "flex-1 text-center py-1.5 sm:py-2 px-2 sm:px-4 rounded-full cursor-pointer transition-all duration-300 text-xs sm:text-sm",
                selected === index
                  ? "bg-white text-blue-500 shadow-md font-semibold"
                  : "text-gray-600 hover:bg-gray-200 font-bold"
              )}
            >
              {tab}
            </li>
          ))}
        </ul>

        <div className="space-y-3 sm:space-y-4">
          <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
            May 01, 2022, 12:01PM
          </p>
          <h1 className="font-bold text-xl sm:text-2xl text-gray-800">
            Collection of New Cool Monkeys
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            velit tenetur dicta eaque laborum quo incidunt praesentium numquam
            asperiores et!
          </p>
          <div className="h-px bg-gray-200"></div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <Image
                src="/ape2.jpg"
                alt="Creator"
                width={40}
                height={40}
                className="rounded-full object-cover shadow-md ring-2 ring-gray-200"
              />
              <div>
                <p className="text-gray-500 text-xs sm:text-sm">Creator</p>
                <p className="font-semibold text-sm sm:text-base text-gray-800">
                  Saksham Tomar
                </p>
              </div>
            </div>
            <button className=" flex text-nowrap font-bold items-center flex-row gap-1 sm:gap-2 px-4 sm:px-6 py-1.5 sm:py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors duration-300 text-xs sm:text-sm">
              Other Works
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
