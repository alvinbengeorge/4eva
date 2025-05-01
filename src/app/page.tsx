import Link from "next/link";
import VoiceButton from "@/components/voiceButton";
import Typewriter from "@/components/typewriter";
import SearchBar from "@/components/searchBar";

export default function Home() {
  return (
    <section className="grid place-items-center h-screen">
      <div className="grid place-items-center grid-cols-2 h-full w-full">        
        <div className="grid place-items-center w-full h-full bg-black">
          <VoiceButton />
          <SearchBar />
          <div className="grid place-items-center grid-cols-2 gap-2 w-full h-full p-4">
            <Link href="/faculty" className="w-full h-full rounded-2xl">
              <div className="grid place-items-center w-full h-full bg-gray-800 rounded-2xl text-white hover:bg-gray-600 duration-500">Faculty</div>
            </Link>
            <Link href="/office" className="w-full h-full rounded-2xl">
              <div className="grid place-items-center w-full h-full bg-gray-800 rounded-2xl text-white hover:bg-gray-600 duration-500">Office</div>
            </Link>
            
          </div>
        </div>
        <div className="w-full h-full">
          <h1 className="text-xl text-gray-900 dark:text-white p-8 h-full w-full">
            <Typewriter words="Hello I'm eva" />
          </h1>
        </div>

      </div>
    </section>
  );
}
