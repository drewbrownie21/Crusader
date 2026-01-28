import { useEffect, useState } from "react";

export const Countdown = () => {
    const [currentTime, setCurrentTime] = useState(new Date().getTime())

    const RELEASE_DATE = new Date("2026-02-03");
    const SECONDS = 60;
    const MINS = 60; 
    const HOURS = 24;

    const distance = RELEASE_DATE.getTime() - currentTime
    const secondsUntilRelease = Math.floor((distance % (1000 * 60)) / 1000);
    const minUntilRelease = Math.floor(distance % (1000 * SECONDS * MINS) /(1000 *  SECONDS))
    const hoursUntilRelease = Math.floor(distance % (1000 * SECONDS * MINS * HOURS) / (1000 * MINS * SECONDS))
    const daysUntilRelease = Math.floor(distance % (1000 * SECONDS * MINS * HOURS * 24) / (1000 * HOURS * MINS * SECONDS))

    useEffect(() => {
        setInterval(() =>{
            setCurrentTime(new Date().getTime())
        }, 1000)
    }, [])

    return(
        <>
        {distance > 0 ? `Time until release! ${daysUntilRelease} : ${hoursUntilRelease} : ${minUntilRelease} : ${secondsUntilRelease}` : "RELEASED!"}
        </>
    )
}