'use client'

import dayjs from "dayjs";
import './timer.components.css'
import {useEffect, useState} from "react";
import * as timers from "timers";

export default function Timer() {

    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    const deadline = 'July, 1, 2023';
    const time = Date.parse(deadline) - Date.now();

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDay(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHour(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinute(Math.floor((time / 1000 / 60) % 60));
        setSecond(Math.floor((time / 1000) % 60));
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(), 0);
        return () => clearInterval(interval);
    }, []);

    if (time > 0) {
        return (
            <div>
                <p>Apollo, RiF, Sync and many others will go dark in</p>
                <div className={'timer'}>
                    {day + ' days, ' + hour + ':' + minute + ':' + second}
                </div>
            </div>);

    } else {
        return (<div>
            <p>Apollo, RiF, Sync and many others went dark on July 1st 2023 thanks to Reddit API changes</p>
        </div>)
    }
}