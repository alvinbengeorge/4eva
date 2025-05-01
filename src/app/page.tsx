import Image from "next/image";
import VoiceButton from "@/components/voiceButton";
import Typewriter from "@/components/typewriter";

export default function Home() {
  return (
    <section className="grid place-items-center h-screen">
      <div className="grid place-items-center grid-cols-2 h-full">        
        <div className="grid place-items-center w-full h-full bg-black">
          <VoiceButton />
        </div>
        <div className="w-full h-full">
          <h1 className="text-xl text-left text-gray-900 dark:text-white p-8">
            <Typewriter words="Hello I'm eva" />
          </h1>
        </div>

      </div>
    </section>
  );
}
