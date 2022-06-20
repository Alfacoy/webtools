import {DateTime} from "luxon";

export default class MasterTimer {
    constructor() {

    }

    now = () =>{
        return `${DateTime.now().hour}:${DateTime.now().minute}:${DateTime.now().second}`;
    }

    diff = (end) => {
        const endTime = DateTime.fromISO(end);
        return endTime.toSeconds() - DateTime.now().toSeconds();
    }
}