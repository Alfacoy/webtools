import {DateTime, Duration, Interval} from 'luxon';
const statusList = ['En Curso', 'Pausado', 'Finalizado'];

export default class MasterReminder {
    constructor(title, status, hour, minute) {
        this.title = title;
        this.status = status;
        this.creationDate = DateTime.now();
        this.endTime = DateTime.fromObject({hour: hour ,minute: minute});
        this.showDetails();
    }

    showDetails = () => {
        console.log(`
            Title: ${this.title}.
            Status: ${this.status}.
            CreationDate: ${this.creationDate}.
            EndTime: ${this.endTime}.
        `)
    }

    countDown = (currentTime) => {
        const interval = Interval.fromDateTimes(currentTime,this.endTime);
        const data = interval.count('seconds') - 1
        if(!isNaN(data)) {
            return data
        } else{
            return 0
        }
    }

    duration = () => {
        const interval = Interval.fromDateTimes(this.creationDate, this.endTime);
        const data = interval.count('seconds') - 1
        return data
    }
}
