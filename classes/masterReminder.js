import {DateTime,Interval} from 'luxon';
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
            CurrentTime: ${this.currentTime}.
            EndTime: ${this.endTime}.
        `)
    }

    whenIFinish = () => {
        return this.endTime.toSeconds() - DateTime.now().toSeconds();
    }

    interval = () => {
        const data = Interval.fromDateTimes(this.creationDate,this.endTime);
        return data.length() / 1000
    }
}
