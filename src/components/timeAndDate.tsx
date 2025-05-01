"use client";
import React, { useEffect, useState } from 'react';

const TimeAndDate: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed bottom-2 right-2 bg-black bg-opacity-70 text-white p-3 rounded-xl text-sm font-sans text-center">
            <div>{currentTime.toLocaleDateString()}</div>
            <div>{currentTime.toLocaleTimeString()}</div>
        </div>
    );
};

export default TimeAndDate;
