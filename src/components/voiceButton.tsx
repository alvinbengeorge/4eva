"use client";
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Mic, MicOff } from 'lucide-react';

const VoiceButton = ({ setSearchMode }: { setSearchMode: Dispatch<SetStateAction<number>>}) => {
    const [isRecording, setIsRecording] = useState(false);

    const handleToggleRecording = () => {
        setIsRecording((prev) => !prev);
        setSearchMode(0);
    };

    return (
        <button
            onClick={handleToggleRecording}
            className={!isRecording ? "p-12 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" : "p-12 text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"}
        >
            {isRecording ? <MicOff className="w-10 h-10" /> : <Mic className="w-10 h-10" />}
        </button>
    );
};

export default VoiceButton;