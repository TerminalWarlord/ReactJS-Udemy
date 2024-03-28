import { useState, useEffect } from "react";


export default function ProgressBar({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log("timer");
        const timer = setTimeout(onTimeout, timeout);
        return () => {
            clearTimeout(timer);
        }

    }, [timeout, onTimeout]);
    useEffect(() => {
        console.log("interval");

        const interval = setInterval(() => {
            setRemainingTime(prevState => prevState - 10);
        }, 10);

        return () => {
            clearInterval(interval);
        }
    }, []);
    return <progress value={remainingTime} max={timeout} className={mode} />
}