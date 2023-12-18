"use client"

import React, { useState, useEffect } from 'react';

type CountdownTimerProps = {
    targetDate: Date;
};

const Countdown: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date();
          const difference = targetDate.getTime() - now.getTime();
    
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((difference / 1000 / 60) % 60);
          const seconds = Math.floor((difference / 1000) % 60);
    
          setTimeLeft({
            days: days < 10 ? '0' + days : days.toString(),
            hours: hours < 10 ? '0' + hours : hours.toString(),
            minutes: minutes < 10 ? '0' + minutes : minutes.toString(),
            seconds: seconds < 10 ? '0' + seconds : seconds.toString(),
          });
    
          if (difference < 0) {
            clearInterval(interval);
            setTimeLeft({
              days: '00',
              hours: '00',
              minutes: '00',
              seconds: '00',
            });
          }
        }, 1000);
        return () => clearInterval(interval);
  }, [targetDate]);

    return (
        <div className="flex justify-center space-x-2 mt-4 md:mt-6 text-white text-center items-center">
            <div className="bg-[#7a5c47] px-2 py-4 md:p-4 rounded-xl">
                <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2 font-mono">{timeLeft.days}</div>
                <div className="text-xs md:text-sm">DAYS</div>
            </div>
            <div className="text-[#7a5c47] text-2xl md:text-4xl">:</div>
            <div className="bg-[#7a5c47] px-2 py-4 md:p-4 rounded-xl">
                <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2 font-mono">{timeLeft.hours}</div>
                <div className="text-xs md:text-sm">HOURS</div>
            </div>
            <div className="text-[#7a5c47] text-2xl md:text-4xl">:</div>
            <div className="bg-[#7a5c47] px-2 py-4 md:p-4 rounded-xl">
                <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2 font-mono">{timeLeft.minutes}</div>
                <div className="text-xs md:text-sm">MIN</div>
            </div>
            <div className="text-[#7a5c47] text-2xl md:text-4xl">:</div>
            <div className="bg-[#7a5c47] px-2 py-4 md:p-4 rounded-xl">
                <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2 font-mono">{timeLeft.seconds}</div>
                <div className="text-xs md:text-sm">SEC</div>
            </div>
        </div>
    )
}

export {Countdown};