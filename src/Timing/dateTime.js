import React from 'react';
import { conf } from '../utilies/config.js'

export const useDate = () => {
    const localeTime = "en";
    const localeDate = "it";
    const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

    React.useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
            // This will trigger a rerender every component that uses the useDate hook.
            setDate(new Date());
        }, 60 * 1000);
        return () => {
            clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
        }
    }, []);

    const day = today.toLocaleDateString(localeDate, { weekday: 'short' });
    const date = `${day} - ${today.getDate()} ${today.toLocaleDateString(localeDate, { month: 'long' })}`;

    const time = today.toLocaleTimeString(localeTime, { hour: 'numeric', hour12: false, minute: 'numeric' });
    
    const hour = today.getHours();
    var wish;

    if (hour > 5 && hour < 13) wish = conf.dateTime.wishes.morning
    else if (hour >= 13 && hour < 20) wish = conf.dateTime.wishes.afternoon
    else if (hour >= 20 && hour < 24) wish = conf.dateTime.wishes.evening
    else wish = conf.dateTime.wishes.night


    return {
        date,
        time,
        wish,
    };
};
