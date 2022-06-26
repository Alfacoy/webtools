import { useState} from "react";
//**Components**//
import ProgressBar from "../ProgressBar";
//**Styles**//
import style from './style.module.css';

const ReminderLayout = ({status,title,time,reminder, currentTime}) => {
    const [statusReminder, setStatusReminder] = useState(status)
    const {year,month,day,hour,minute} = time;

    function isDone (event) {
        setStatusReminder(event)
    }

    return (
        <div className={style.container} >
            <span><span>[{statusReminder}]</span> - <b>{title}</b></span>
            <ProgressBar reminder={reminder} currentTime={currentTime} isDone={isDone} />
            <span>Date-Time: {year}/{month < 10 ? `0${month}` : month}/{day < 10 ? `0${day}` : day} - {hour < 10 ? `0${hour}` : hour}:{minute < 10 ? `0${minute}`:minute} {hour > 12 ? 'PM': 'AM'}</span>
        </div>
    )
}

export default ReminderLayout;