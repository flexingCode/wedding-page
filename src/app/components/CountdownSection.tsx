'use client'
import moment from 'moment';
import { useState, useEffect } from 'react';
import { Countdown } from './Countdown';

const CountdownSection = () => {
    const theBigDay = moment('2025-05-24');
    const [leftDays, setLeftDays] = useState(0);
    const [leftHours, setLeftHours] = useState(0);
    const [leftMinutes, setLeftMinutes] = useState(0);
    const [leftSeconds, setLeftSeconds] = useState(0);

    const updateTimer = () => {
        const now = moment();
        const duration = moment.duration(theBigDay.diff(now));

        const days = duration.asDays() > 0 ? Math.floor(duration.asDays()) : 0;
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();

        setLeftDays(days);
        setLeftHours(hours);
        setLeftMinutes(minutes);
        setLeftSeconds(seconds);
    };

    useEffect(() => {
        updateTimer(); // Actualizar inmediatamente al montar
        const timer = setInterval(updateTimer, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-primary-100 p-4">
            <h2 className="font-calista text-4xl text-white text-center">
                Solo faltan. . .
            </h2>
            <div className="flex gap-2 justify-between text-white pt-8">
                <Countdown number={leftDays} label="Días" />
                <Countdown number={leftHours} label="Horas" />
                <Countdown number={leftMinutes} label="Minutos" />
                <Countdown number={leftSeconds} label="Segundos" />
            </div>
        </div>
    )

}

export default CountdownSection;