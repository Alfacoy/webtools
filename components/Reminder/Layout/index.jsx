import style from './style.module.css';
import ProgressBar from "../ProgressBar";

const ReminderLayout = ({status,title,time,reminder}) => {
    const {year,month,day,hour,minute} = time;
    return (
        <div className={style.container}>
            <span><span>[{status}]</span> - <b>{title}</b></span>
            <ProgressBar reminder={reminder} />
            <span>Date-Time: {year}/{month < 10 ? `0${month}` : month}/{day < 10 ? `0${day}` : day} - {hour < 10 ? `0${hour}` : hour}:{minute < 10 ? `0${minute}`:minute} {hour > 12 ? 'PM': 'AM'}</span>
        </div>
    )
}

export default ReminderLayout;