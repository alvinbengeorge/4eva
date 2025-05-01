"use client";
import React, { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';

const VoiceButton: React.FC = () => {
    const [isRecording, setIsRecording] = useState(false);

    const handleToggleRecording = () => {
        setIsRecording((prev) => !prev);
    };

    return (
        <button
            onClick={handleToggleRecording}
            className="p-4 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
            {isRecording ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
        </button>
    );
};

export default VoiceButton;