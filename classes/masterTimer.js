import {DateTime} from "luxon";

export default class MasterTimer {
    constructor() {

    }

    display = () =>{
        const time = DateTime.now();
        const hour = time.hour < 10 ? `0${time.hour}` : time.hour;
        const minute = time.minute < 10 ? `0${time.minute}` : time.minute;
        const second = time.second < 10 ? `0${time.second}` : time.second;

        return `${hour}:${minute}:${second}`;
    }

    currentTime = () => {
        return DateTime.now();
    }
}