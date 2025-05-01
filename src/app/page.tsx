"use client";

import Link from "next/link";
import VoiceButton from "@/components/voiceButton";
import Typewriter from "@/components/typewriter";
import SearchBar from "@/components/searchBar";
import TimeAndDate from "@/components/timeAndDate";
import { useEffect, useState } from "react";

export default function Home() {
  const [searchMode, setSearchMode] = useState(0);
  // 1 for faculty
  // 2 for office
  // 3 for department
  // 0 for typewriter
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "1") {
        setSearchMode(1);
      } else if (event.key === "2") {
        setSearchMode(2);
      } else if (event.key === "3") {
        setSearchMode(3);
      } else if (event.key === "0") {
        setSearchMode(0);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  })
  return (
    <section className="grid place-items-center h-screen">
      <div className="grid place-items-center grid-cols-2 h-full w-full">
        <div className="grid place-items-center w-full h-full bg-black">
          <SearchBar />
          <VoiceButton setSearchMode={setSearchMode}/>
          <div className="grid place-items-center grid-cols-3 gap-2 w-full h-full p-4">
            <button
              onClick={() => setSearchMode(1)}
              className={`w-full h-full rounded-2xl ${searchMode === 1 ? "bg-gray-600" : "bg-gray-800"
                } text-white hover:bg-gray-600 duration-500`}
            >
              Faculty
            </button>
            <button
              onClick={() => setSearchMode(2)}
              className={`w-full h-full rounded-2xl ${searchMode === 2 ? "bg-gray-600" : "bg-gray-800"
                } text-white hover:bg-gray-600 duration-500`}
            >
              Office
            </button>
            <button
              onClick={() => setSearchMode(3)}
              className={`w-full h-full rounded-2xl ${searchMode === 3 ? "bg-gray-600" : "bg-gray-800"
                } text-white hover:bg-gray-600 duration-500`}
            >
              Department
            </button>
          </div>
        </div>
        <div className="w-full h-full">
          {searchMode === 0 && (
            <h1 className="text-xl text-gray-900 dark:text-white p-8 h-full w-full">
              <Typewriter words={`To talk to me, press the mic button, wait for me to say I'm listening and then say "Hello Eva", followed by your query`} />
            </h1>
          )}
            {searchMode === 1 && (
            <div className="p-8">
              <input
              type="text"
              placeholder="Search for faculty..."
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="mt-4 w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Search
              </button>
            </div>
            )}
            {searchMode === 2 && (
            <div className="p-8">
              <input
              type="text"
              placeholder="Search for office..."
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="mt-4 w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Search
              </button>
            </div>
            )}
            {searchMode === 3 && (
            <div className="p-8">
              <input
              type="text"
              placeholder="Search for department..."
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="mt-4 w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Search
              </button>
            </div>
            )}

        </div>

      </div>
      <TimeAndDate />

    </section>
  );
}
